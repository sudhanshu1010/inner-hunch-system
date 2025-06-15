import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ActionMenuComponent } from '../action-menu/action-menu.component';

@Component({
  selector: 'app-navbar',
  imports: [SearchBarComponent, ActionMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
}
