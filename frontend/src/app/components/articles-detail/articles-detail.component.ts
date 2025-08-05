// import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-articles-detail',
//   imports: [CommonModule],
//   templateUrl: './articles-detail.component.html',
//   styleUrl: './articles-detail.component.css'
// })
// export class ArticlesDetailComponent {
//   @Input() article!: any | null;
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  imports: [CommonModule],
  templateUrl: './articles-detail.component.html',
  styleUrl: './articles-detail.component.css'
})
export class ArticlesDetailComponent implements OnInit {
  article: any;

  constructor(private route: ActivatedRoute, private articleService: ArticlesService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.articleService.getArticles().subscribe(data => {
      this.article = data.find(a => a.slug === slug);
    });
  }
}
