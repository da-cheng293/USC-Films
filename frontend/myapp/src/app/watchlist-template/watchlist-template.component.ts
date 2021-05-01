import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-watchlist-template',
  templateUrl: './watchlist-template.component.html',
  styleUrls: ['./watchlist-template.component.css']
})
export class WatchlistTemplateComponent implements OnInit {
  @Input() image_result;
  @Input() title;
  @Input() image_result_mobile;
  constructor() { }

  ngOnInit(): void {
  }

}
