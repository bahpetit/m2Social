import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>('api/users');
  }
  getById(id: number): Observable<User> {
    return this.http.get<User>(`api/users/${id}`);
  }
}
