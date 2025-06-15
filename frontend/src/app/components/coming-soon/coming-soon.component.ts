import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coming-soon',
  imports: [],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css'
})
export class ComingSoonComponent {
  constructor(private router: Router) {}

  goToArticles() {
    this.router.navigate(['/articles']);
  }
}
