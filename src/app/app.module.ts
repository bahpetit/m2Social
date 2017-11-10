import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPostComponent } from './post/list-post/list-post.component';
import { PostRootComponent } from './post/post-root/post-root.component';
import { RouterModule, Routes } from '@angular/router';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';


const appRoutes: Routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: 'app/user/user.module#UserModule',
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PostModule,
    UserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
