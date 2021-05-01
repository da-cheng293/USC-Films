import { Component, OnInit ,Input} from '@angular/core';
import {Search_Multi_Service} from '../search-multi';
@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit{
  //image_data;
  constructor(private http_search_multi: Search_Multi_Service){}
  @Input()image_result;
  @Input()screen_size;
  // title_result=[];
  // id_result=[];
  ngOnInit(){

    // var counter=0
    // this.http_search_multi.get_result_now_playing().subscribe((response)=>{
    //   this.image_data = response;
    //   // this.image_result=this.image_data.results
    //   var i;
    //   for(i=0;i<this.image_data.results.length;i++){
           
    //        if(counter==5){
    //          break;
    //        }

    //        if((this.image_data.results[i]["backdrop_path"])){
    //           // this.image_result.push("https://image.tmdb.org/t/p/original"+this.image_data.results[i]["backdrop_path"])
    //           // this.title_result.push(this.image_data.results[i]["title"])
    //           // this.id_result.push(this.image_data.results[i]["id"])
    //           counter+=1;
    //           this.image_result.push(this.image_data.results[i])
    //        }
        
    //   }
    //    console.log(this.image_result)
      
    //   });

  }
  
  
   
}
