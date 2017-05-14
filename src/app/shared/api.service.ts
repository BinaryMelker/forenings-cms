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
     let options = this.prepareRequestOptions();
    return this.http.get(this.api_url + '/posts/getAllVisible', options)
    .map((response: Response) => response.json().posts as Post[]);
 }

 /**
  *  Get all links from server.
  */
 getLinks(): Observable <Link[]> {
    
    let options = this.prepareRequestOptions();
    
    return this.http.get(this.api_url + '/links/getAll', options)
    .map((response: Response) => response.json().links as Link[]);

 }
 /**
  *  Post a new link to server
  * 
  */
 postLink(link: Link, userToken: Token): Observable<boolean>{
        console.log('Stringefied request', JSON.stringify(link) );
        let body = { url: link.url, name: link.name };
        let options = this.prepareRequestOptions(userToken);
        
        return this.http.post(this.api_url + '/links/create', body, options)
            .map((response: Response) => {

                if(response.status == 201){
                //Post sucsess
                console.error(response);
                return true;
                }else{
                 console.error(response.status);
                return false;    
                }
                
            });
    }

    /**
     *  This method is used for setting heders and if
     *  a user is logged in Authorization.
     */
 
prepareRequestOptions(userToken?: Token):RequestOptions {

        let headers = new Headers();
        if(userToken){ 
            headers.append( 'Authorization','JWT ' + userToken.token );
         }
        headers.append( 'Content-Type', 'application/json; charset=utf-8' );
        //headers.append( 'Origin', 'http://localhost:5000'); 
        let options = new RequestOptions({ headers: headers, withCredentials: true });


        return options;
    }
    
    

}