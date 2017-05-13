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
import { LinkListComponent } from './link-list/link-list.component';
import { EditLinksComponent } from './edit-links/edit-links.component';
import { EditLinkFormComponent } from './edit-links/edit-link-form.component';

//Providers
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './shared/auth.service';
import { ApiService } from './shared/api.service';

//To support CORS
import { BrowserXhr } from '@angular/http';
import { CustExtBrowserXhr } from './shared/cust-ext-browser-xhr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    LoginUserFormComponent,
    PostListComponent,
    LinkListComponent,
    EditLinksComponent,
    EditLinkFormComponent

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
    ApiService,
    BrowserXhr,
    CustExtBrowserXhr
     
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

/**
 * bootstrap(AppComponent, [
 HTTP_PROVIDERS,
 provide(BrowserXhr,{useClass:CustExtBrowserXhr})
]);
 */
