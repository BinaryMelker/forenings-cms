import { Http, Response } from '@angular/http';
import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class PostService {
 
 constructor(private http: Http){}

 // get posts from server
 getPosts(): Observable <Post[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map((response: Response) => response.json() as Post[]);
 }

}