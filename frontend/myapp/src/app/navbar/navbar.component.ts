import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
check_mobile;
  constructor(public breakpoint_handler: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpoint_handler.observe([
      Breakpoints.XSmall
    
     
    ]).subscribe( (state_handler) => {

    if(state_handler.breakpoints[Breakpoints.XSmall]){
      this.check_mobile="mobile"

    }
    else{ 
      this.check_mobile="desktop"
    }
  })
  }
  

}
