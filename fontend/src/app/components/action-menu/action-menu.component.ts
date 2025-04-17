import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-action-menu',
  imports: [CommonModule],
  templateUrl: './action-menu.component.html',
  styleUrl: './action-menu.component.css'
})
export class ActionMenuComponent {
  isHamburgerVisible = false;
  public createIhPost(){
    console.log("hi from create ih post");
  }

  public toggleHamburger(){
    this.isHamburgerVisible = !this.isHamburgerVisible;
  }
}
