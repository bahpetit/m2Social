import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;
  parmamsObs: Subscription;
  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>
      this.service.getById(+params.get('id'))
        .subscribe(post => {
          this.post = post
        })
    );
  }

}
