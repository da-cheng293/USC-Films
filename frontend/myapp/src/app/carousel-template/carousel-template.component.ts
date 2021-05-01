import { Component, OnInit, Input } from '@angular/core';
import {Search_Multi_Service} from '../search-multi';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-carousel-template',
  templateUrl: './carousel-template.component.html',
  styleUrls: ['./carousel-template.component.css']
})
export class CarouselTemplateComponent implements OnInit{

  @Input() image_result;
  @Input() title;
  @Input() screen_size;
  temp_data=[];
  // image_data;
  // constructor(private http_search_multi: Search_Multi_Service){}
  // image_result=[];
  constructor(public breakpoint_handler: BreakpointObserver){}
  ngOnInit(){

    

  }

 
}
