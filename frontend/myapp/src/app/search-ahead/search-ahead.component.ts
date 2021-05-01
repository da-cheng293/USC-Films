
import {Component, OnInit, Input} from '@angular/core';
import {Observable, of, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap, tap, catchError} from 'rxjs/operators';
import {Search_Multi_Service} from '../search-multi';
import {Router} from '@angular/router'


let op_test=[]
@Component({
  selector: 'app-search-ahead',
  templateUrl: './search-ahead.component.html',
  styleUrls: ['./search-ahead.component.css']
})
export class SearchAheadComponent implements OnInit{
  public model: any;
  @Input() screen_size;


  constructor(private http_search_multi: Search_Multi_Service,
    private go_router: Router ){
    
  }
  ngOnInit(){
    

    
  }
  search_bar = (text$: Observable<string>) => {
    return text$.pipe(      
        debounceTime(200), 
        distinctUntilChanged(),
      
        switchMap( (searchText) =>  this.http_search_multi.get_result_with_query(searchText))
                     
    );                 
  }
  format_blank(value:any){
    
  
    return [];
  }

  output_link(value:any){

   
    if (value.item["media_type"]=="tv"){
    console.log(value.item["id"])
    
    this.go_router.navigate(["/watch/tv", value.item["id"]])
    }
    else{
     

      this.go_router.navigate(["/watch/movie", value.item["id"]])
    }
  }
  
}
