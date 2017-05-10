import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [ 
    { path: 'login', component: LoginComponent },
    { path: '', component: LandingPageComponent, canActivate: [AuthGuard] },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];