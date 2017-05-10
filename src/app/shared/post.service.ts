import { Http } from '@angular/http'
import { Post } from './post.model'
import { Injectable } from '@angular/core'; 

@Injectable()
export class PostService {
 
 constructor(private http: Http){}

 // get posts from server
 getPosts(): Promise<Post[]> {
    return this.http.get('app/post')
    .toPromise()
    .then(response => response.json().data as Post[]);
 }

}