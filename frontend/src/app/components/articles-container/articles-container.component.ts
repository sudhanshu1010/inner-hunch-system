import { Component, OnInit  } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ArticlesDetailComponent } from '../articles-detail/articles-detail.component';
import { ArticlesListComponent } from '../articles-list/articles-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles-container',
  imports: [NavbarComponent,
    ArticlesDetailComponent,
    ArticlesListComponent
  ],
  templateUrl: './articles-container.component.html',
  styleUrl: './articles-container.component.css'
})
export class ArticlesContainerComponent {
  selectedArticle: any | null = null;
  slugFromUrl: string | null = null;
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.slugFromUrl = params.get('slug') || null;
    });
  }

  onArticleSelected(article: any) {
    this.selectedArticle = article;
    history.replaceState(null, '', `/articles/${article.slug}`);
  }
}
