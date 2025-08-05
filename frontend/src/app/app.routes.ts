import { Routes } from '@angular/router';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
//import { ArticlesContainerComponent } from './components/articles-container/articles-container.component';
import { ArticlesDetailComponent } from './components/articles-detail/articles-detail.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';

export const routes: Routes = [
    // { path: '', component: ComingSoonComponent },
    // { 
    //     path: 'articles', 
    //     component: ArticlesContainerComponent, 
    //     children: [
    //         { path: '', component: ArticlesListComponent},
    //         { path: ':slug', component: ArticlesDetailComponent}
    //     ]
    // },
    // { path: '', redirectTo: 'articles', pathMatch: 'full' },
    // { path: '**', redirectTo: '' }


    { path: '', redirectTo: 'coming-soon', pathMatch: 'full' },
    { path: 'coming-soon', component: ComingSoonComponent },
    { path: 'articles', component: ArticlesListComponent },
    { path: 'articles/:slug', component: ArticlesDetailComponent },
    { path: '**', redirectTo: 'coming-soon' }
];
