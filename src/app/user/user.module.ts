import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RootUserComponent } from './root-user/root-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'user',
    component: RootUserComponent,
    children: [
      {
        path: ':id',
        component: UserComponent
      },
      {
        path: '',
        component: ListUserComponent
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
  providers: [UserService],
  exports: [RootUserComponent],
  declarations: [RootUserComponent, UserComponent, ListUserComponent]
})
export class UserModule { }
