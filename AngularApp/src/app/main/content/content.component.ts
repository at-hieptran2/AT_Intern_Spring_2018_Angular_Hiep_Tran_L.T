import { Component, Output } from '@angular/core';
import { post } from 'selenium-webdriver/http';
export class PageInit {
  id: number;
  name: string;
  text: string;
}

@Component ({
  selector: 'page-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})

export class PageContentComponent {
  selectedPost = {};
  isShowDetail = false;
  
  posts: PageInit[] = [
    { id: 1, name: 'Develop Across All Platforms', text: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.' },
    { id: 2, name: 'Develop Across All Platforms 1', text: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.' },
    { id: 3, name: 'Develop Across All Platforms 2', text: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.' },
    { id: 4, name: 'Develop Across All Platforms 3', text: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.' },
    { id: 5, name: 'Develop Across All Platforms 4', text: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.' },
  ];
  
  onSelect(post) {
    this.selectedPost = post;
    this.isShowDetail = true;
    console.log(this.selectedPost);
  }

}