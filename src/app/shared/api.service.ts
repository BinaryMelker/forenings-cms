import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
//Import models
import { Post } from './post.model';
import { Link } from './link.model';
import { Token } from './Token.model';

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
 /**
  *  Post a new link to server
  * integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  *        crossorigin="anonymous"
  */
 postLink(link: Link, userToken: Token): Observable<boolean>{
        console.log('Stringefied request', JSON.stringify(link) );
        let headers = new Headers();
        let bodey = { }
         headers.append('Authorization','JWT ' + userToken.token);
         headers.append('Origin', 'http://localhost:5000');
         headers.append('Access-Control-Request-Method', 'POST');
         console.debug('Authorization' + ' JWT ' + userToken.token);
         let options = new RequestOptions({ headers: headers });
        return this.http.post(this.api_url + '/links/create', link, headers)
            .map((response: Response) => {

                if(response.status == 200){
                //Post sucsess
                return true;
                }else{
                 console.error(response.status);
                return false;    
                }
                
            });
    }

}