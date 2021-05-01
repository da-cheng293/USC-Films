import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import{ ActivatedRoute } from '@angular/router'
import {Search_Multi_Service} from '../search-multi';
@Component({
  selector: 'app-details-template',
  templateUrl: './details-template.component.html',
  styleUrls: ['./details-template.component.css']
})
export class DetailsTemplateComponent implements OnInit {
   @Input() video_key;
   @Input() movie_block;
   @Input() screen_size;
   delete_button;
   add_button;
   movie_id;

   movie_refresh_handler;
   private alert_handler = new Subject<string>();
   private alert_handler_failed = new Subject<string>();
   actual_message = '';
   failed_message ='';
   @ViewChild('closed_alert', {static: false}) closed_alert: NgbAlert;


  constructor( private get_id_handler: ActivatedRoute,
    private http_handler: Search_Multi_Service,) { }
  ngOnChanges(){
  if((this.movie_block)&&(!String(this.movie_block.runtime).match("hrs")) ){

    console.log(this.movie_block.runtime +"time_try")
    this.movie_block.runtime=(Math.floor(this.movie_block.runtime/60)+"hrs"+" "+ this.movie_block.runtime%60+"mins")
    this.movie_block.release_date=String(this.movie_block.release_date).match("^[0-9]{4}")
  }

 

  }

  // movie_detail_data(id,video_handler, http_data_movie_detail_handler){
  //   http_data_movie_detail_handler.subscribe((response)=>{
  //     video_handler=response;
  //     let genres_result="";
  //     this.movie_block.push(video_handler.title)
  //     this.movie_block.push(video_handler.tagline)
  //     this.movie_block.push(video_handler.release_date.match("^[0-9]{4}"))
  //     this.movie_block.push(video_handler.vote_average)
  //     this.movie_block.push(Math.floor(video_handler.runtime/60)+"hrs"+" "+ video_handler.runtime%60+"mins")
  //     var i;
  //     for(i=0;i<video_handler.genres.length;i++){
  //       if(i==video_handler.genres.length-1){
  //         genres_result+=video_handler.genres[i]["name"]
  //       }
  //       else{
  //         genres_result+=video_handler.genres[i]["name"]+","
  //       }
        
  //     }
  //     this.movie_block.push(genres_result)
  //     this.movie_block.push(video_handler.spoken_languages[0]["english_name"])
  //     this.movie_block.push(video_handler.overview)
  //     this.movie_block.push(video_handler.id)
  //     this.movie_block.push(video_handler.poster_path)
      

  //     // var i;
  //     // for(i=0;i<video_handler.results.length;i++){
  //     //   if(video_handler.results[i]["key"]){

  //     //     this.video_key=video_handler.results[i]["key"]
  //     //     console.log(this.video_key)
  //     //     break
  //     //   }
      
  //     // }
  //     // if(typeof(this.video_key)=="undefined"){
  //     //   this.video_key="tzkWB85ULJY"
  //     // }
  //     // console.log(this.video_key)
  //     console.log("make_sure_3")

  //   })

  // }

  ngOnInit() {
    this.add_button=null
    this.delete_button=null
    this.alert_handler.subscribe(message => this.actual_message = message);
    this.alert_handler_failed.subscribe(message => this.failed_message = message);
    this.alert_handler.pipe(debounceTime(5000)).subscribe(() => {
      if (this.closed_alert) {
        this.closed_alert.close();
      }
    });
    this.alert_handler_failed.pipe(debounceTime(5000)).subscribe(() => {
      if (this.closed_alert) {
        this.closed_alert.close();
      }
    });
    this.get_id_handler.paramMap.subscribe(para =>{
      this.movie_id = para.get("movie_id")
    this.check_watch_list_data(this.movie_id)})


  }


  check_watch_list_data(value){
    if(localStorage.getItem("watch_list_data")==null){

    //  document.getElementById("add_button").textContent="Add to Watchlist"
      this.add_button="ok"
    }
    else {
      let watch_list_data=JSON.parse(localStorage.getItem("watch_list_data"))
      var i;
      var counter=0
      console.log("ok_check")
      for(i=0;i<watch_list_data.act_data[0].length;i++){
      
        
        if((watch_list_data.act_data[0][i].id==value)&&(watch_list_data.act_data[0][i].title)){
          // document.getElementById("add_button").textContent="Remove from Watchlist"
          // break
         this.delete_button="ok"
         counter++
        }
      }
      if(counter==0){
        this.add_button="ok"
      }


    }


  }
  
  Add_to_watch_list(){
    //this.alert_handler.next("Added to watchlist");
    if(document.getElementById("add_button").textContent=="Add to Watchlist"){
      if(localStorage.getItem("watch_list_data")==null){

        let watch_list_data={
          act_data:[[{"title": this.movie_block.title, "id": this.movie_block.id, "poster_path": this.movie_block.poster_path}]]
        }
        let string_watch_list_data=JSON.stringify(watch_list_data)
        localStorage.setItem("watch_list_data", string_watch_list_data)
      }
      else{
    
        let watch_list_data=JSON.parse(localStorage.getItem("watch_list_data"))
        // if((continue_data.act_data[0].length==6)&&(continue_data.act_data.length==4)){
        //   continue_data.act_data[continue_data.act_data.length-1].splice(continue_data.act_data[continue_data.act_data.length-1].length-1, 1)
        // }
        // if(watch_list_data.act_data[0].length==6){
        //   watch_list_data.act_data.unshift([{"title": value.title, "id": id, "poster_path": value.poster_path}])
        // }
        // else{
          //console.log("tv_test")
          watch_list_data.act_data[0].unshift({"title": this.movie_block.title, "id": this.movie_block.id, "poster_path": this.movie_block.poster_path})
        //}
        let string_watch_list_data=JSON.stringify(watch_list_data)
        localStorage.setItem("watch_list_data", string_watch_list_data)
      }

    document.getElementById("add_button").textContent="Remove from Watchlist"
    this.alert_handler.next("Added to watchlist");
  }
  else{
    let watch_list_data=JSON.parse(localStorage.getItem("watch_list_data"))
    // if((continue_data.act_data[0].length==6)&&(continue_data.act_data.length==4)){
    //   continue_data.act_data[continue_data.act_data.length-1].splice(continue_data.act_data[continue_data.act_data.length-1].length-1, 1)
    // }
    // if(watch_list_data.act_data[0].length==6){
    //   watch_list_data.act_data.unshift([{"title": value.title, "id": id, "poster_path": value.poster_path}])
    // }
    // else{
      //console.log("tv_test")
      var i;
      for(i=0;i<watch_list_data.act_data[0].length;i++){

        if(watch_list_data.act_data[0][i].id==this.movie_block.id){
          watch_list_data.act_data[0].splice(i, 1)
        }
      }
      // if(watch_list_data.act_data[0].length==0){
      //   watch_list_data=null
      // }
    
      //watch_list_data.act_data[0].unshift({"title": this.movie_block[0], "id": this.movie_block[8], "poster_path": this.movie_block[9]})
    //}
    let string_watch_list_data=JSON.stringify(watch_list_data)
    localStorage.setItem("watch_list_data", string_watch_list_data)
    
    document.getElementById("add_button").textContent="Add to Watchlist"

    this.alert_handler_failed.next("Removed from watchlist");
  }

}
}