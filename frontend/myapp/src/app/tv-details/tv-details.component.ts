import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router';
import {Search_Multi_Service} from '../search-multi';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
  movie_id;
  video_key;
  video_handler;
  movie_detail_result;
  cast_result;
  review_result;
  recommend_results=[];
  similar_results=[];
  recommend_title="Recommended TV shows"
  similar_title="Similar TV shows"
  check_mobile;
  constructor(    private http_handler: Search_Multi_Service,
    private get_id_handler: ActivatedRoute,
    public breakpoint_handler: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpoint_handler.observe([
      Breakpoints.XSmall
    
     
    ]).subscribe( (state_handler) => {

    if(state_handler.breakpoints[Breakpoints.XSmall]){

      this.check_mobile="mobile";
      this.get_id_handler.paramMap.subscribe(para =>{
        this.movie_id = para.get("tv_id")
        this.video_key=null
        this.movie_youtube(this.video_handler,this.http_handler.get_result_tv_video(this.movie_id))
        this.movie_detail_data(this.movie_id,this.video_handler,this.http_handler.get_result_tv_detail(this.movie_id))
        
        this.movie_cast_data(this.video_handler, this.http_handler.get_result_tv_cast(this.movie_id))
        this.movie_review_data(this.video_handler, this.http_handler.get_result_tv_review(this.movie_id))
        this.movie_data_mobile(this.video_handler, this.recommend_results, this.http_handler.get_result_tv_recommend(this.movie_id))
        this.movie_data_mobile(this.video_handler, this.similar_results, this.http_handler.get_result_tv_similar(this.movie_id))
        console.log(this.recommend_results)
      })
    }
    else{
      this.check_mobile="desktop";
      this.get_id_handler.paramMap.subscribe(para =>{
        this.movie_id = para.get("tv_id")
        console.log(this.movie_id+"tv")
        this.video_key=null
       this.movie_youtube(this.video_handler,this.http_handler.get_result_tv_video(this.movie_id))
        this.movie_detail_data(this.movie_id,this.video_handler,this.http_handler.get_result_tv_detail(this.movie_id))
        
        this.movie_cast_data(this.video_handler, this.http_handler.get_result_tv_cast(this.movie_id))
        this.movie_review_data(this.video_handler, this.http_handler.get_result_tv_review(this.movie_id))
        this.movie_data(this.video_handler, this.recommend_results, this.http_handler.get_result_tv_recommend(this.movie_id))
        this.movie_data(this.video_handler, this.similar_results, this.http_handler.get_result_tv_similar(this.movie_id))
        console.log(this.recommend_results)
      })
    }
  });
  }

  movie_youtube(video_handler, http_data_movie_detail_handler){
    http_data_movie_detail_handler.subscribe((response)=>{
      video_handler=response;
      var i;
      var trailer;
      var teaser;
      
      for(i=0;i<video_handler.results.length;i++){
        if(video_handler.results[i]["key"]){
          
        if(video_handler.results[i]["type"]=="Trailer"){
            trailer=video_handler.results[i]["key"]
            
        }
        else if(video_handler.results[i]["type"]=="Teaser"){
            teaser=video_handler.results[i]["key"]
            
        }
      


       
        }
      
      }

      if(trailer){
        this.video_key=trailer
      }
      else if(teaser){
        this.video_key=teaser
      }
    
    


      if(!this.video_key){
        this.video_key="tzkWB85ULJY"
      }
      console.log(this.video_key)
      

    })

  }

  movie_detail_data(id,video_handler, http_data_movie_detail_handler){
    http_data_movie_detail_handler.subscribe((response)=>{
      video_handler=response;
      let genres_result="";
      this.movie_detail_result=video_handler
      // this.movie_detail_result.push(video_handler.tagline)
      // this.movie_detail_result.push(video_handler.release_date.match("^[0-9]{4}"))
      // this.movie_detail_result.push(video_handler.vote_average)
      // this.movie_detail_result.push(Math.floor(video_handler.runtime/60)+"hrs"+" "+ video_handler.runtime%60+"mins")
      // var i;
      // for(i=0;i<video_handler.genres.length;i++){
      //   if(i==video_handler.genres.length-1){
      //     genres_result+=video_handler.genres[i]["name"]
      //   }
      //   else{
      //     genres_result+=video_handler.genres[i]["name"]+","
      //   }
     console.log("check_pass_movie_detail")   
      // }
      // this.movie_detail_result.push(genres_result)
      // this.movie_detail_result.push(video_handler.spoken_languages[0]["english_name"])
      // this.movie_detail_result.push(video_handler.overview)
      // this.movie_detail_result.push(video_handler.id)
      // this.movie_detail_result.push(video_handler.poster_path)
     this.update_continue_watching(id, video_handler )

      // var i;
      // for(i=0;i<video_handler.results.length;i++){
      //   if(video_handler.results[i]["key"]){

      //     this.video_key=video_handler.results[i]["key"]
      //     console.log(this.video_key)
      //     break
      //   }
      
      // }
      // if(typeof(this.video_key)=="undefined"){
      //   this.video_key="tzkWB85ULJY"
      // }
      // console.log(this.video_key)
      console.log("make_sure")

    })

  }

  update_continue_watching(id,value){

    if(localStorage.getItem("continue_data")==null){
  
      let continue_data={
        act_data:[[{"name": value.name, "id": id, "poster_path": value.poster_path}]]
      }
      let string_continue_data=JSON.stringify(continue_data)
      localStorage.setItem("continue_data", string_continue_data)
    }
    else{
  
      let continue_data=JSON.parse(localStorage.getItem("continue_data"))
      var repeat_check=""
      var temp_data=[];
      var temp_data_result=[];
      var no_temp_data=[]
      var no_temp_data_result=[];
      var i;
      var j;
  
      if((continue_data.act_data[0].length==6)&&(continue_data.act_data.length==4)){
        // var repeat_check=""
        // var temp_data=[];
        // var temp_data_result=[];
        // var no_temp_data=[]
        // var no_temp_data_result=[];
        // var i;
        // var j;
        
        for(i=3;i>=0;i--){
          for(j=5;j>=0;j--){
            if((continue_data.act_data[i][j].id == id)&&(continue_data.act_data[i][j].name)){
              repeat_check="tick"
              continue
            }
            else{
              temp_data.unshift(continue_data.act_data[i][j])
            }
            if(temp_data.length==6){
              temp_data_result.unshift(temp_data)
              temp_data=[]
            }
  
          }
  
  
        }
        if(repeat_check=="tick"){
          temp_data.unshift({"name": value.name, "id": id, "poster_path": value.poster_path})
          temp_data_result.unshift(temp_data)
          let revise_continue={ act_data: temp_data_result }
          let string_continue_data=JSON.stringify(revise_continue)
          localStorage.setItem("continue_data", string_continue_data)
        }
        else{
          for(i=3;i>=0;i--){
            for(j=5;j>=0;j--){
              if((i==3)&&(j==5)){
                
                continue
              }
              else{
                no_temp_data.unshift(continue_data.act_data[i][j])
              }
              if(no_temp_data.length==6){
                no_temp_data_result.unshift(no_temp_data)
                no_temp_data=[]
              }
    
            }
    
    
          }
          no_temp_data.unshift({"name": value.name, "id": id, "poster_path": value.poster_path})
          no_temp_data_result.unshift(no_temp_data)
          let revise_continue={ act_data: no_temp_data_result }
          let string_continue_data=JSON.stringify(revise_continue)
          localStorage.setItem("continue_data", string_continue_data)
  
        }
  
        // continue_data.act_data[continue_data.act_data.length-1].splice(continue_data.act_data[continue_data.act_data.length-1].length-1, 1)
      }
      else{
        for(i=continue_data.act_data.length-1;i>=0;i--){
          for(j=continue_data.act_data[i].length-1;j>=0;j--){
            if((continue_data.act_data[i][j].id == id)&&(continue_data.act_data[i][j].name)){
              repeat_check="tick"
              continue
            }
            else{
              temp_data.unshift(continue_data.act_data[i][j])
            }
            if(temp_data.length==6){
              temp_data_result.unshift(temp_data)
              temp_data=[]
            }
  
          }
  
  
        }
      if(temp_data!=[]){
        temp_data_result.unshift(temp_data)
      }
  
      
      if(temp_data_result[0].length==6){
        temp_data_result.unshift([{"name": value.name, "id": id, "poster_path": value.poster_path}])
      }
      else{
        console.log("tv_test")
        temp_data_result[0].unshift({"name": value.name, "id": id, "poster_path": value.poster_path})
      }
    
      let revise_continue={ act_data: temp_data_result }
      let string_continue_data=JSON.stringify(revise_continue)
      localStorage.setItem("continue_data", string_continue_data)
  
  
    }
    }
  
   }

   movie_cast_data(video_handler, http_data_movie_cast_handler){
    http_data_movie_cast_handler.subscribe((response)=>{

      video_handler=response;
      this.cast_result=video_handler.cast

    

    })


  }


  movie_review_data(video_handler, http_data_movie_review_handler){
    http_data_movie_review_handler.subscribe((response)=>{

      video_handler=response;
      this.review_result=video_handler.results
      console.log(this.review_result)

      

    })
  }
  movie_data(data_handler, data_result, http_data_handler){
    var counter=0
    http_data_handler.subscribe((response)=>{
      data_handler= response;
      var i;
      var j=0;
      data_result[j]=[]
      for(i=0;i<data_handler.results.length;i++){
         
           if(counter==24){
             break;
           }

           if((data_handler.results[i]["poster_path"])){
              
              if((data_result[j].length ==6 ) )
              {
                 j++
                 data_result[j]=[]
              }

              data_result[j].push(data_handler.results[i])
              
              counter+=1;
           }
           
        
      }
      //  console.log(data_result)
      
      });

  }

  movie_data_mobile(data_handler, data_result, http_data_handler){
    var counter=0
    http_data_handler.subscribe((response)=>{
      data_handler= response;
      var i;
      
      
      for(i=0;i<data_handler.results.length;i++){
         
           if(counter==24){
             break;
           }

           if((data_handler.results[i]["poster_path"])){
              
           

              data_result.push([data_handler.results[i]])
              
              counter+=1;
           }
           
        
      }
      //  console.log(data_result)
      
      });

  }

}
