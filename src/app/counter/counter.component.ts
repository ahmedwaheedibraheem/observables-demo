import { OnInit, Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count: number;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.deletedPostsCountEmitter.subscribe((count: number) => {
      this.count = count;
    });
  }
}
