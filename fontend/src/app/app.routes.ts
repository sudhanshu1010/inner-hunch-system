import { Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { PostContentComponent } from './components/post-content/post-content.component';

export const routes: Routes = [
//   {
//     path: '',
//     loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
//     children: [
//       { path: '', redirectTo: 'feed', pathMatch: 'full' },
//       { path: 'feed', component: FeedComponent },
//       { path: 'post-content', component: PostContentComponent }
//     ]
//   }

    { path: 'feed', component: FeedComponent },
    { path: 'post-content', component: PostContentComponent }
];
