import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Token } from './shared/token.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
title = 'Förenings-CMS';


constructor(private authService: AuthService){}

onClick(){
    this.authService.logout();
}

isLogin():boolean{
   
   var user = JSON.parse(localStorage.getItem('currentUser'));
 
   return user ? true : false;
}

}

