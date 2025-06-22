import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles-detail',
  imports: [CommonModule],
  templateUrl: './articles-detail.component.html',
  styleUrl: './articles-detail.component.css'
})
export class ArticlesDetailComponent {
  @Input() article!: any | null;
}
