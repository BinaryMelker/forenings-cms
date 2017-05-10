//Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouting } from './app.routing';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginUserFormComponent } from './login/login-user-form.component';
import { PostListComponent } from './post-list/post-list.component';

//Providers
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './shared/auth.service';
import { PostService } from './shared/post.service';

@NgModule({
  declarations: [
    //Dont forget to declear the components to Melker!
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    LoginUserFormComponent,
    PostListComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    PostService
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
