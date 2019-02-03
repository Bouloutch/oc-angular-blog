import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string = 'Le nom de mon post';
  @Input() postContent: string = 'Le contenu de mon post';
  @Input() createdAt = new Date();

  loveIts: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onLove() {
    this.loveIts++;
    console.log(this.loveIts);
  }

  onDontLove() {
    this.loveIts--;
    console.log(this.loveIts);
  }
}
