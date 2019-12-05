import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from '../posts/post/post.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private deletedPostsCount: number;
  deletedPostsCountEmitter: BehaviorSubject<number>;

  constructor(private http: HttpClient) {
    this.deletedPostsCount = 0;
    this.deletedPostsCountEmitter = new BehaviorSubject<number>(
      this.deletedPostsCount
    );
  }

  fetchPosts() {
    return this.http.get<PostModel[]>(this.postsUrl);
  }

  countDeletedPost() {
    this.deletedPostsCount++;
    this.deletedPostsCountEmitter.next(this.deletedPostsCount);
  }
}
