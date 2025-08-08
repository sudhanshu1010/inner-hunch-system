import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProgressCircleComponent } from '../progress-circle/progress-circle.component';

@Component({
  selector: 'app-article-detail',
  imports: [CommonModule,
    NavbarComponent,
    FooterComponent,
    ProgressCircleComponent
  ],
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

  scrollProgress = 0;

  @HostListener('window:scroll', [])
  onScroll() {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    this.scrollProgress = (scrollTop / scrollHeight) * 100;
  }
}