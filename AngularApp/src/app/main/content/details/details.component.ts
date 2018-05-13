import { Component, Input } from '@angular/core';
// import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'product-detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class ProductDetailComponent {
  constructor() {
  }
  ngOnInit() {
  }

  @Input() post;
  @Input() isShowDetail;
}