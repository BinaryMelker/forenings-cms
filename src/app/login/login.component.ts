import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'app-loggin',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private authService: AuthService){}

onClick(){
    this.authService.logout();
}

}