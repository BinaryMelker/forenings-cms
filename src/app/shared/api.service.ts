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


//////////////////////////\ POSTS /\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

 /**
  *  Get all posts from server.
  */
 getPosts(): Observable <Post[]> {
     let options = this.prepareRequestOptions();
    return this.http.get(this.api_url + '/posts/getAllVisible', options)
    .map((response: Response) => response.json().posts as Post[]);
 }

 /**
  *  Post a new post to server
  * 
  */
 postNewPost(post: Post, userToken: Token): Observable<boolean>{
        console.log('Stringefied request', JSON.stringify(post) );
        let body = { title: post.title, body: post.body, isVisible: post.isVisible };
        let options = this.prepareRequestOptions(userToken);
        
        return this.http.post(this.api_url + '/posts/create', body, options)
            .map((response: Response) => {

                if(response.status == 201){
                //Post sucsess
                console.log(JSON.stringify(response));
                return true;
                }else{
                 console.error(response.status);
                return false;    
                }
                
            });
    }

    /**
     *  
     * Update old post
     * 
     */
      updatePost(post: Post, userToken: Token): Observable<boolean>{
        console.log('Stringefied request', JSON.stringify(post) );
        let body = { id: post._id, title: post.title, body: post.body, isVisible: post.isVisible };
        let options = this.prepareRequestOptions(userToken);
        
        return this.http.post(this.api_url + '/posts/update', body, options)
            .map((response: Response) => {

                if(response.status == 200){
                //Post sucsess
                console.log(JSON.stringify(response));
                return true;
                }else{
                 console.error(response.status);
                return false;    
                }
                
            });
    }


/**
 *  remove post from server
 * 
 */ 
 removePost(post: Post, userToken: Token): Observable<boolean>{
        console.log('Stringefied request', JSON.stringify(post) );
        let body = { id: post._id };
        let options = this.prepareRequestOptions(userToken);
        
        return this.http.post(this.api_url + '/posts/remove', body, options)
            .map((response: Response) => {

                if(response.status == 200){
                //Post sucsess
                console.log(JSON.stringify(response));
                return true;
                }else{
                 console.error(response.status);
                return false;    
                }
                
            });
    }

//////////////////////////\ LINKS /\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
 postNewLink(link: Link, userToken: Token): Observable<boolean>{
        console.log('Stringefied request', JSON.stringify(link) );
        let body = { url: link.url, name: link.name };
        let options = this.prepareRequestOptions(userToken);
        
        return this.http.post(this.api_url + '/links/create', body, options)
            .map((response: Response) => {

                if(response.status == 201){
                //Post sucsess
                console.log(JSON.stringify(response));
                return true;
                }else{
                 console.error(response.status);
                return false;    
                }
                
            });
    }

    /**
     *  
     * Update old link
     * 
     */
      updateLink(link: Link, userToken: Token): Observable<boolean>{
        console.log('Stringefied request', JSON.stringify(link) );
        let body = { id: link._id, name: link.name, url: link.url };
        let options = this.prepareRequestOptions(userToken);
        
        return this.http.post(this.api_url + '/links/update', body, options)
            .map((response: Response) => {

                if(response.status == 200){
                //Post sucsess
                console.log(JSON.stringify(response));
                return true;
                }else{
                 console.error(response.status);
                return false;    
                }
                
            });
    }


/**
 *  remove link
 * 
 */

      removeLink(link: Link, userToken: Token): Observable<boolean>{
        console.log('Stringefied request', JSON.stringify(link) );
        let body = { id: link._id };
        let options = this.prepareRequestOptions(userToken);
        
        return this.http.post(this.api_url + '/links/remove', body, options)
            .map((response: Response) => {

                if(response.status == 200){
                //Post sucsess
                console.log(JSON.stringify(response));
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