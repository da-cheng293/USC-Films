import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {map} from 'rxjs/operators'
import {Observable, of, OperatorFunction} from 'rxjs';



  @Injectable({
    providedIn: 'root'
})
export class Search_Multi_Service {
    temp_data;
    constructor(
        private http_multi: HttpClient
    ){}
  

    get_result_with_query(query){
        if (query === '') {
            return of([]);
          }
        let data_query={params:new HttpParams({fromString: "query_holder="+query})};

        return this.http_multi.get("https://hw8-293.wl.r.appspot.com/multi_search", data_query).pipe(map(response=>response["results"]))
        
     
    }
 

    get_result_now_playing(){
        

        return this.http_multi.get("https://hw8-293.wl.r.appspot.com/current_playing_movie")
          
 

}

get_result_popular_movie(){
        

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/popular_movie")
}

get_result_top_movie(){
        

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/top_rated_movie")
}

get_result_trending_movie(){

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/trending_movie")
}

get_result_popular_tv(){

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/popular_tv")
}

get_result_top_tv(){

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/top_rated_tv")
}


get_result_trending_tv(){

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/trending_tv")
}

get_result_movie_detail(query){
    if (query === '') {
        return of([]);
      }
    let data_query={params:new HttpParams({fromString: "query_holder="+query})};

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/movie_details", data_query)
    
   
}

get_result_tv_detail(query){
    if (query === '') {
        return of([]);
      }
    let data_query={params:new HttpParams({fromString: "query_holder="+query})};

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/tv_details", data_query)
    

}

get_result_movie_video(query){
    if (query === '') {
        return of([]);
      }
    let data_query={params:new HttpParams({fromString: "query_holder="+query})};

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/movie_video", data_query)
    
   
}


get_result_tv_video(query){
    if (query === '') {
        return of([]);
      }
    let data_query={params:new HttpParams({fromString: "query_holder="+query})};

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/tv_video", data_query)
    
  
}

get_result_movie_review(query){
    if (query === '') {
        return of([]);
      }
    let data_query={params:new HttpParams({fromString: "query_holder="+query})};

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/movie_reviews", data_query)

}

get_result_tv_review(query){
    if (query === '') {
        return of([]);
      }
    let data_query={params:new HttpParams({fromString: "query_holder="+query})};

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/tv_reviews", data_query)
  
}


get_result_movie_cast(query){
    if (query === '') {
        return of([]);
      }
    let data_query={params:new HttpParams({fromString: "query_holder="+query})};

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/movie_credits", data_query)
    
   
}

get_result_tv_cast(query){
    if (query === '') {
        return of([]);
      }
    let data_query={params:new HttpParams({fromString: "query_holder="+query})};

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/tv_credits", data_query)
    
   
}

get_result_movie_similar(query){
    if (query === '') {
        return of([]);
      }
    let data_query={params:new HttpParams({fromString: "query_holder="+query})};

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/similar_movie", data_query)
    
  
}

get_result_tv_similar(query){
    if (query === '') {
        return of([]);
      }
    let data_query={params:new HttpParams({fromString: "query_holder="+query})};

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/similar_tv", data_query)
    
  
}

get_result_movie_recommend(query){
    if (query === '') {
        return of([]);
      }
    let data_query={params:new HttpParams({fromString: "query_holder="+query})};

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/recommend_movie", data_query)
    
  
}

get_result_tv_recommend(query){
    if (query === '') {
        return of([]);
      }
    let data_query={params:new HttpParams({fromString: "query_holder="+query})};

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/recommend_tv", data_query)
    
   
}


get_result_cast_detail(query){
    if (query === '') {
        return of([]);
      }
    let data_query={params:new HttpParams({fromString: "query_holder="+query})};

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/cast_details", data_query)
    
 
}

get_result_cast_external(query){
    if (query === '') {
        return of([]);
      }
    let data_query={params:new HttpParams({fromString: "query_holder="+query})};

    return this.http_multi.get("https://hw8-293.wl.r.appspot.com/external_ids", data_query)
    
  
}

}