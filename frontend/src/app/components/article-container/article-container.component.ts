import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';

@Component({
  selector: 'app-article-container',
  imports: [NavbarComponent,
    ArticleListComponent,
    ArticleDetailComponent
  ],
  templateUrl: './article-container.component.html',
  styleUrl: './article-container.component.css'
})
export class ArticleContainerComponent {

}
