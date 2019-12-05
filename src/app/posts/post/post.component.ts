import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface PostModel {
  userId: string;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() postData: PostModel;
  @Output() delete = new EventEmitter<null>();

  deletePost() {
    this.delete.emit();
  }
}
