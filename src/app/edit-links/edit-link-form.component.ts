
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Link } from '../shared/link.model'
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../shared/auth.service';
import { ApiService } from '../shared/api.service';
import { Token } from '../shared/token.model';

@Component({
    selector: '<app-edit-link-form>',
    templateUrl: './edit-link-form.component.html'
})
export class EditLinkFormComponent {
link: Link;
url: string;
name: string;
token: Token;
 
 @ViewChild('linkForm') loginForm: NgForm;

 constructor(private apiService: ApiService,private authService: AuthService){}

    onSubmit(loginForm: NgForm) {
        if(this.loginForm.invalid) return;
        this.link = new Link();
        this.link.url = this.url;
        this.link.name = this.name;
        
        this.token = JSON.parse(localStorage.getItem('currentUser'));
        
        console.debug('Url: ' + this.url + ' name: ' + this.name);

     
        this.apiService.postLink(this.link, this.token)
            .subscribe(result => {
                if (result === true) {
                    // link successfully added
                    this.loginForm.reset()
                    console.log('link added')
                } else {
                    // adding link failed
                    console.error('Somthing whent wrong with adding link!');
                    
                }
            });
            
    }


} 