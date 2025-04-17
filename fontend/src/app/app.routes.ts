import { Routes } from '@angular/router';
import { PostContentComponent } from './components/post-content/post-content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeedComponent } from './components/feed/feed.component';

export const routes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
            { path: '', redirectTo: 'feed', pathMatch: 'full' },
            { path: 'feed', component: FeedComponent },
            { path: 'post-content', component: PostContentComponent}
        ]
    }

    // { path: 'post-content', component: PostContentComponent},
    // { path: 'home', component: DashboardComponent}
];
