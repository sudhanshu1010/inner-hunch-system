import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LinksComponent } from './components/links/links.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    FooterComponent, 
    LinksComponent, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '004_angularSmallApps';
}
