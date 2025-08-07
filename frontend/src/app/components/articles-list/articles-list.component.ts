import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-articles-list',
  imports: [CommonModule, FooterComponent, NavbarComponent],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent implements OnInit {
  articles: any[] = [];

  constructor(private articleService: ArticlesService, private router: Router) {}

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }

  viewArticle(slug: string) {
    this.router.navigate(['/articles', slug]);
  }
}

