import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fontend';
  message = '';
  private http = inject(HttpClient);

  constructor() {
    this.http.get('http://localhost:8080/api/hello', { responseType: 'text' })
      .subscribe({
        next: (data) => this.message = data,
        error: (err) => this.message = 'Error: ' + err.message
      });
  }
}
