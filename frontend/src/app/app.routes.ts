import { Routes } from '@angular/router';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { ArticlesDetailComponent } from './components/articles-detail/articles-detail.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';

export const routes: Routes = [
    { path: '', redirectTo: 'coming-soon', pathMatch: 'full' },
    { path: 'coming-soon', component: ComingSoonComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'articles', component: ArticlesListComponent },
    { path: 'articles/:slug', component: ArticlesDetailComponent },
    { path: 'login', component: UserLoginComponent },
    { path: 'signup', component: UserSignupComponent },
    { path: '**', redirectTo: 'coming-soon' }
];