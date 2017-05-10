import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginUserFormComponent } from './login/login-user-form.component';

//Providers
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './shared/auth.service';

@NgModule({
  declarations: [
    //Dont forget to declear the components to Melker!
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    LoginUserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthGuard,
    AuthService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
