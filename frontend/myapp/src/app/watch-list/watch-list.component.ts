import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
   watch_list_result;
   watch_list_title="My WatchList"
   watch_list_result_mobile;
  constructor( public breakpoint_handler: BreakpointObserver,
    private router_handler: Router) { }

  ngOnInit(): void {
   
    let destring_watch_list_data = JSON.parse(localStorage.getItem("watch_list_data"))


    //console.log(destring_watch_list_data)
    this.breakpoint_handler.observe([
      Breakpoints.XSmall
    
     
    ]).subscribe( (state_handler) => {

    if(state_handler.breakpoints[Breakpoints.XSmall]){
    console.log("mobile_detext")
    if(destring_watch_list_data==null){
      this.watch_list_result_mobile=null
    }
    else{
      this.watch_list_result_mobile=destring_watch_list_data.act_data
      console.log(this.watch_list_result_mobile)
    }
  }
  else{
    if(destring_watch_list_data==null){
      this.watch_list_result=null
    }
    else{
      this.watch_list_result=destring_watch_list_data.act_data
    }

  }
})
  }

}
