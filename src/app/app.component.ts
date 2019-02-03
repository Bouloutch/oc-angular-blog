import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My blog';
  listPosts = [
    {
      title: 'First post',
      content: 'Content of my first post',
      created_at: new Date(2018,5,7,7,18)
    },
    {
      title: 'Second post',
      content: 'Content of my second post',
      created_at: new Date(2015,4,2,4,56)
    },
    {
      title: 'Third post',
      content: 'Content of my third post',
      created_at: new Date(2013,9,23,11,34)
    }
  ]
}
