import { Post } from './post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  get(): Post {
    return {
      id: 1,
      content: "J'adore les chatons",
      img: "http://mymodernmet.com/wp/wp-content/uploads/archive/J1ttn9ZtwV6lXEux61KL_1082105496.jpeg",
      userId: 1,
      timestamp: 1510038432
    }
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>('api/posts');
  }
  getById(id: number): Observable<Post> {
    return this.http.get<Post>(`api/posts/${id}`);
  }

  createOrUpdate(livre: Post): void {
    this.http.post('api/posts', livre).subscribe();
  }

}
