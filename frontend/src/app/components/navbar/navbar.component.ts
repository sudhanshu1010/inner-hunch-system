import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ActionMenuComponent } from '../action-menu/action-menu.component';
import { RouterModule } from '@angular/router';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserSignupComponent } from '../user-signup/user-signup.component';

@Component({
  selector: 'app-navbar',
  imports: [SearchBarComponent, 
    ActionMenuComponent,
    RouterModule,
    UserLoginComponent,
    UserSignupComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {}