import { OnInit, Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { PostModel } from './post/post.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts = null;
  message = null;

  constructor(private postsService: PostsService) {}

  // Here is the implementation of posts fetching using observables, ES6 and ES7. Use just one.

  // Observables way
  ngOnInit() {
    this.postsService.fetchPosts().subscribe(
      (data: PostModel[]) => {
        this.posts = data;
        this.message = null;
      },
      (error: Error) => {
        this.message = error.message;
      }
    );
  }

  // ES6 way (.then)
  // ngOnInit() {
  //   this.postsService
  //     .fetchPosts()
  //     .toPromise()
  //     .then((data: PostModel[]) => {
  //       this.posts = data;
  //       this.message = null;
  //     })
  //     .catch((error: Error) => {
  //       this.message = error.message;
  //     });
  // }

  // ES7 way (async await)
  // async ngOnInit() {
  //   try {
  //     this.posts = await this.postsService.fetchPosts().toPromise();
  //     this.message = null;
  //   } catch (error) {
  //     this.message = error.message;
  //   }
  // }

  deletePost(postIndex: number) {
    this.posts.splice(postIndex, 1);
    this.postsService.countDeletedPost();
  }
}
