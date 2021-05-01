import { Component, OnInit } from '@angular/core';
import {Search_Multi_Service} from '../search-multi';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  image_data;
  constructor(private http_search_multi: Search_Multi_Service,
    public breakpoint_handler: BreakpointObserver){}
  image_result=[];
  popular_movie_title="Popular Movie"
  top_rated_handler;
  top_rated_results=[];
  top_rated_title="Top Rated Movies"
  trending_movie_handler;
  trending_movie_results=[];
  trending_movie_title="Trending Movies"
  popular_tv_handler;
  popular_tv_results=[];
  popular_tv_title="Popular TV Shows"
  top_tv_handler;
  top_tv_results=[];
  top_tv_title="Top Rated TV Shows"
  trending_tv_handler;
  trending_tv_results=[];
  trending_tv_title="Trending TV Shows"
  continue_results=[];
  continue_title="Continue Watching"
  home_carousel_results=[];
  home_carousel_handler;
  check_mobile;
  ngOnInit(){
this.breakpoint_handler.observe([
      Breakpoints.XSmall
    
     
    ]).subscribe( (state_handler) => {

    if(state_handler.breakpoints[Breakpoints.XSmall]){
      this.check_mobile="mobile"
    let destring_continue_data = JSON.parse(localStorage.getItem("continue_data"))
    console.log(destring_continue_data)
    if(destring_continue_data==null){
      this.continue_results=null
    }
    else{
      this.data_transfer_mobile(this.continue_results, destring_continue_data)
      
    }
    this.home_carousel_data(this.home_carousel_handler, this.home_carousel_results, this.http_search_multi.get_result_now_playing())
    this.movie_data_mobile(this.image_data, this.image_result, this.http_search_multi.get_result_popular_movie())


    this.movie_data_mobile(this.top_rated_handler,this.top_rated_results,this.http_search_multi.get_result_top_movie() )

    this.movie_data_mobile(this.trending_movie_handler,this.trending_movie_results,this.http_search_multi.get_result_trending_movie() )

    this.movie_data_mobile(this.popular_tv_handler , this.popular_tv_results , this.http_search_multi.get_result_popular_tv() )
    this.movie_data_mobile(this.top_tv_handler , this.top_tv_results , this.http_search_multi.get_result_top_tv() )
    this.movie_data_mobile(this.trending_tv_handler , this.trending_tv_results , this.http_search_multi.get_result_trending_tv() )
  }
  else{

    this.check_mobile="desktop"
      let destring_continue_data = JSON.parse(localStorage.getItem("continue_data"))
      console.log(destring_continue_data)
      if(destring_continue_data==null){
        this.continue_results=null
      }
      else{
        this.continue_results=destring_continue_data.act_data
      }
      this.home_carousel_data(this.home_carousel_handler, this.home_carousel_results, this.http_search_multi.get_result_now_playing())
      this.movie_data(this.image_data, this.image_result, this.http_search_multi.get_result_popular_movie())
  
  
      this.movie_data(this.top_rated_handler,this.top_rated_results,this.http_search_multi.get_result_top_movie() )
  
      this.movie_data(this.trending_movie_handler,this.trending_movie_results,this.http_search_multi.get_result_trending_movie() )
  
      this.movie_data(this.popular_tv_handler , this.popular_tv_results , this.http_search_multi.get_result_popular_tv() )
      this.movie_data(this.top_tv_handler , this.top_tv_results , this.http_search_multi.get_result_top_tv() )
      this.movie_data(this.trending_tv_handler , this.trending_tv_results , this.http_search_multi.get_result_trending_tv() )

  }

});
    // var counter=0
    // this.http_search_multi.get_result_popular_movie().subscribe((response)=>{
    //   this.image_data = response;
    //   var i;
    //   var j=0;
    //   this.image_result[j]=[]
    //   for(i=0;i<this.image_data.results.length;i++){
         
    //        if(counter==24){
    //          break;
    //        }

    //        if((this.image_data.results[i]["poster_path"])){
              
    //           if((this.image_result[j].length ==6 ) )
    //           {
    //              j++
    //              this.image_result[j]=[]
    //           }

    //           this.image_result[j].push(this.image_data.results[i])
              
    //           counter+=1;
    //        }
           
        
    //   }
    //    console.log(this.image_result)
      
    //   });
   
      
      

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
  data_transfer_mobile(target, continue_receive){
         var i;
         var j;
         for(i=0;i<continue_receive.act_data.length;i++){
           for(j=0;j<continue_receive.act_data[i].length;j++){
              target.push([continue_receive.act_data[i][j]])
              
           }

         }
     
      

  }

  home_carousel_data(data_handler, data_result, http_data_handler){
    var counter=0
    http_data_handler.subscribe((response)=>{
      data_handler = response;
      // this.image_result=this.image_data.results
      var i;
      for(i=0;i<data_handler.results.length;i++){
           
           if(counter==5){
             break;
           }

           if((data_handler.results[i]["backdrop_path"])){
              // this.image_result.push("https://image.tmdb.org/t/p/original"+this.image_data.results[i]["backdrop_path"])
              // this.title_result.push(this.image_data.results[i]["title"])
              // this.id_result.push(this.image_data.results[i]["id"])
              counter+=1;
              data_result.push(data_handler.results[i])
           }
        
      }
       
      
      });
    
  }
 


}
