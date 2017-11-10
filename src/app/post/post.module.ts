import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostRootComponent } from './post-root/post-root.component';
import { PostComponent } from './post/post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'post',
    component: PostRootComponent,
    children: [
      {
        path: ':id',
        component: PostComponent
      },
      {
        path: '',
        component: ListPostComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  providers: [PostService],
  exports: [PostRootComponent],
  declarations: [PostRootComponent, PostComponent, ListPostComponent]
})
export class PostModule { }
