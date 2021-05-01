import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-template',
  templateUrl: './review-template.component.html',
  styleUrls: ['./review-template.component.css']
})
export class ReviewTemplateComponent implements OnInit {
  @Input() review_input;
  constructor() { }
  
  ngOnInit(): void {
    

      // var i;
      // for(i=0;i<this.review_input.length;i++){
      //   console.log(this.review_input[i].author_details.avatar_path)
      //   if(this.review_input[i].author_details.avatar_path){

        
      //   // if(this.review_input[i].author_details.avatar_path.match("^[https]{5}")){
      //   //   continue
      //   // }
      //   // else{
      //   //   this.review_input[i].author_details.avatar_path="https://image.tmdb.org/t/p/original"+this.review_input[i].author_details.avatar_path
      //   // }
      //   continue
      // }
      // else{
      //   this.review_input[i].author_details.avatar_path="https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU"

      // }
      // }
    
    //console.log(this.review_input)
  }

  ngOnChanges() {
    if(this.review_input){
    var i;
    for(i=0;i<this.review_input.length;i++){
      console.log(this.review_input[i].author_details.avatar_path)
      if(this.review_input[i].author_details.avatar_path){

      
      if(this.review_input[i].author_details.avatar_path.match("^[\/https]{5}")){
        this.review_input[i].author_details.avatar_path=this.review_input[i].author_details.avatar_path.substring(1)
      }
      else{
        this.review_input[i].author_details.avatar_path="https://image.tmdb.org/t/p/original"+this.review_input[i].author_details.avatar_path
      }
      continue
    }
    else{
      this.review_input[i].author_details.avatar_path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU"

    }
    }
  }
  }

}
