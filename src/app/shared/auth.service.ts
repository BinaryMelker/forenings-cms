import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

 
@Injectable()
export class AuthService {
    public token: string;
 
    constructor(private http: Http, private router: Router) {
     
    }
 
    /**
     * Log in funktion;
     */
 login(user: User): Observable<boolean> {
        console.log('Stringefied request', JSON.stringify(user) );
        let options = this.prepareRequestOptions();
        return this.http.post('https://forening-cms.herokuapp.com/login', user, options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;
                    
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ token: token }));
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }
    
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        this.router.navigateByUrl('/');
        console.log('Logged out' + ' ' + 'token=' + this.token + ' ' + 'localStorage=' + localStorage.currentUser);
    }

     getToken(): string {
        return this.token;
     }

    /**
     *  This method is used for setting heders and if
     *  a user is logged in Authorization.
     */
 
prepareRequestOptions():RequestOptions {

        let headers = new Headers();
       
        headers.append( 'Content-Type', 'application/json; charset=utf-8' );
        //headers.append( 'Origin', 'http://localhost:5000'); 
        let options = new RequestOptions({ headers: headers, withCredentials: true });


        return options;
    }

}