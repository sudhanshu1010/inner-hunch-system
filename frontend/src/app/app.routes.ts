import { Routes } from '@angular/router';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleContainerComponent } from './components/article-container/article-container.component';
import { ArticleOverviewComponent } from './components/article-overview/article-overview.component';

export const routes: Routes = [
    { path: '', component: ComingSoonComponent }, // Home page
    { 
        path: 'articles', 
        component: ArticleContainerComponent, 
        children: [
            { path: '', component: ArticleOverviewComponent},
            { path: ':slug', component: ArticleDetailComponent}
        ]
    },
    { path: '', redirectTo: 'articles', pathMatch: 'full' },
    { path: '**', redirectTo: '' } // fallback
];
