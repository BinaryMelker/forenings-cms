
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model'
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../shared/auth.service';


@Component({
    selector: '<app-login-form>',
    templateUrl: './login-user-form.component.html'
})
export class LoginUserFormComponent {
user: any;
email: string;
password: string;
 @ViewChild('loginForm') loginForm: NgForm;

 constructor(private authService: AuthService){}

    onSubmit(loginForm: NgForm) {
        if(this.loginForm.invalid) return;
        this.user = new User();
        this.user.email = this.email;
        this.user.password = this.password;
        

        console.log('E-mail: ' + this.email + ' password: ' + this.password);
        this.authService.login(this.user)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.loginForm.reset()
                    console.log('User login successfull!')
                } else {
                    // login failed
                    console.error('Username or password is incorrect');
                    
                }
            });
    }


} 