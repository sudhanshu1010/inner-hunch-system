// import { Component, OnInit , EventEmitter, Output, Input} from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-articles-list',
//   imports: [CommonModule],
//   templateUrl: './articles-list.component.html',
//   styleUrl: './articles-list.component.css'
// })
// export class ArticlesListComponent {
//   @Output() articleSelected = new EventEmitter<any>();
//   articles: any[] = [];

//   constructor(private http: HttpClient) {}
//   @Input() slugFromUrl: string | null = null;
  
//   // ngOnInit() {
//   //   this.http.get<any[]>('assets/articles.json').subscribe(data => this.articles = data);
//   // }

//   ngOnInit() {
//     this.http.get<any[]>('assets/articles.json').subscribe(data => {
//       this.articles = data;
//       if (this.slugFromUrl) {
//         const match = this.articles.find(a => a.slug === this.slugFromUrl);
//         if (match) {
//           this.articleSelected.emit(match);
//         }
//       }
//     });
//   }

//   selectArticle(article: any) {
//     this.articleSelected.emit(article);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-articles-list',
  imports: [CommonModule, FooterComponent],
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

