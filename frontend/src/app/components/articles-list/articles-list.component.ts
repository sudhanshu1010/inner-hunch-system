import { Component, OnInit , EventEmitter, Output, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-articles-list',
  imports: [CommonModule],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent {
  @Output() articleSelected = new EventEmitter<any>();
  articles: any[] = [];

  constructor(private http: HttpClient) {}
  @Input() slugFromUrl: string | null = null;
  
  // ngOnInit() {
  //   this.http.get<any[]>('assets/articles.json').subscribe(data => this.articles = data);
  // }

  ngOnInit() {
    this.http.get<any[]>('assets/articles.json').subscribe(data => {
      this.articles = data;
      if (this.slugFromUrl) {
        const match = this.articles.find(a => a.slug === this.slugFromUrl);
        if (match) {
          this.articleSelected.emit(match);
        }
      }
    });
  }

  selectArticle(article: any) {
    this.articleSelected.emit(article);
  }
}
