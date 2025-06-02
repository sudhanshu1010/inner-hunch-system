import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeedComponent } from './components/feed/feed.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, 
    NavbarComponent, 
    DashboardComponent,
    FeedComponent,
    ComingSoonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Inner Hunch';
  message = '';
  private http = inject(HttpClient);

  /*
  constructor() {
    this.http.get('http://localhost:8080/api/hello', { responseType: 'text' })
      .subscribe({
        next: (data) => this.message = data,
        error: (err) => this.message = 'Error: ' + err.message
      });
  }
      */
}
