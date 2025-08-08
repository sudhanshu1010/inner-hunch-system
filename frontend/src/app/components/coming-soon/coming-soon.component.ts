import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-coming-soon',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css'
})
export class ComingSoonComponent {
  constructor(private router: Router) {}

  goToArticles() {
    this.router.navigate(['/articles']);
  }
}