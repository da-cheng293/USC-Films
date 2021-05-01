import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Search_Multi_Service} from '../search-multi';
@Component({
  selector: 'app-pop-up-template',
  templateUrl: './pop-up-template.component.html',
  styleUrls: ['./pop-up-template.component.css']
})
export class PopUpTemplateComponent implements OnInit {
  @Input() person_info;
  @Input() social_media;
  constructor(public pop_model: NgbActiveModal,
    private http_handler: Search_Multi_Service) { }

  ngOnInit(){

//     console.log(this.person_info.id+"pl")

     
//    this.http_handler.get_result_cast_external(this.person_info.id).subscribe((response)=>{
//     this.social_media=response
//     console.log(this.social_media)
//     // let temp_data_social = this.get_from_model.open(PopUpTemplateComponent)
//     // temp_data_social.componentInstance.social_media=this.social_result

//  })

  }

}
