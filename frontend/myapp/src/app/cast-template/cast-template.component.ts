import { Component, OnInit, Input } from '@angular/core';
import {Search_Multi_Service} from '../search-multi';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpTemplateComponent } from '../pop-up-template/pop-up-template.component';
@Component({
  selector: 'app-cast-template',
  templateUrl: './cast-template.component.html',
  styleUrls: ['./cast-template.component.css']
})
export class CastTemplateComponent implements OnInit {
  @Input() cast_input;
  person_result;
  social_result;
  constructor(private http_handler: Search_Multi_Service,
    private get_from_model:NgbModal) { }

  ngOnInit(): void {
  }
  open_pop_up(id){
    console.log(id)

    let temp_data = this.get_from_model.open(PopUpTemplateComponent, {size:"xl", centered: true, scrollable:true})
   this.http_handler.get_result_cast_detail(id).subscribe((response)=>{
     
     this.person_result=response
     console.log( this.person_result)
     
     temp_data.componentInstance.person_info=this.person_result
     

   })
 
   this.http_handler.get_result_cast_external(id).subscribe((response)=>{
    this.social_result=response
    console.log(this.social_result)
    temp_data.componentInstance.social_media=this.social_result

 })






  }
}
