import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './guards/auth.guard';
import { PostListComponent } from './post-list/post-list.component';
import { LinkListComponent } from './link-list/link-list.component';

const appRoutes: Routes = [ 
    { path: '', component: LandingPageComponent },
    { path: 'posts', component: PostListComponent },
    { path: 'links', component: LinkListComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRouting {}