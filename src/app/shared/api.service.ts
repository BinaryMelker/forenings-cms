import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
//Import models
import { Post } from './post.model';
import { Link } from './link.model';

@Injectable()
export class ApiService {
    api_url = 'https://forening-cms.herokuapp.com/api';
    
 
 constructor(private http: Http){}

 /**
  *  Get all posts from server.
  */
 getPosts(): Observable <Post[]> {
    return this.http.get(this.api_url + '/posts/getAllVisible')
    .map((response: Response) => response.json().posts as Post[]);
 }

 /**
  *  Get all links from server.
  */
 getLinks(): Observable <Link[]> {
    return this.http.get(this.api_url + '/links/getAll')
    .map((response: Response) => response.json().links as Link[]);

 }

}