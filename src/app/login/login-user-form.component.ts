
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { LoginService } from '../shared/login.service';
import { User } from '../shared/user.model'
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../shared/auth.service';

@Component({
    selector: '<app-login-form>',
    templateUrl: './login-user-form.component.html'
})
export class LoginUserFormComponent {

name: string;
password: string;
 @ViewChild('loginForm') loginForm: NgForm;

 constructor(private authService: AuthService){}

    onSubmit(loginForm: NgForm) {
        if(this.loginForm.invalid) return;
        this.authService.login(this.name, this.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    console.log('User login successfull!')
                } else {
                    // login failed
                    console.error('Username or password is incorrect');
                    
                }
            });
    }
  /**
   * Test code to call the postTest to the test API.
   * http://jsonplaceholder
   */
    onSubmitTest(loginForm: NgForm) {
        if(this.loginForm.invalid) return;
        this.authService.postTest()
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    console.log('User login successfull!')
                } else {
                    // login failed
                    console.error('Username or password is incorrect');
                    
                }
            });         
    }



} 