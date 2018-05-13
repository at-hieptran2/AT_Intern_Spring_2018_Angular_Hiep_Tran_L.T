import { Component, Input, Output, EventEmitter  } from '@angular/core';
export class PageInit {
  id: number;
  name: string;
  text: string;
}

@Component({
  selector: 'product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  title = 'Hiep';
  
  constructor() {}
  ngOnInit() {
  }

  @Input() posts;
  @Input() isShowDetail;
  @Output() selectedPost = new EventEmitter<object>(); 

  onSelect(data) {
    this.selectedPost.emit(data);
  }
}