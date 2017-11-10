import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  posts: Post[] = [];

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

}
