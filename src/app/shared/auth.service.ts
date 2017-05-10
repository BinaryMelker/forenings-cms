import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthService {
    public token: string;
 
    constructor(private http: Http) {}
 
    /* this function dosent work as I want,
       I cant post to the API as I want. I a have CORSE
       problem and I think i have problem with multipart/form-data, 
       the API wants it.  */

    login(username: string, password: string): Observable<boolean> {
         let headers = new Headers(); 
     //    headers.append('Content-Type','multipart/form-data');
        return this.http.post('https://forening-cms.herokuapp.com/login', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }
       /**
        * This is a test function that I use to track down the problem with the API
        * call to Lisas backend. It will be removed later on.
        * http://jsonplaceholder 
        */
        postTest():Observable<boolean>{
          
          //hardcoded object to send in post      
          var testPost =  {
                title: 'foo',
                body: 'bar',
                userId: 1
                }

            return this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(testPost))
            .map( (res: Response) => {
             
             if(res.status > 200 || res.status < 300){
                 console.debug('PostTest', res.json());
                 // return true to indicate successful post.
                    return true;   
             }else{
                 console.debug('PostTest', 'Fail to post');
                 // return false to indicate failed post
                    return false;
             }
            }); 
        }      
    

}