import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isDarkMode: boolean = false;
  changeTheme(event: boolean){
    this.isDarkMode = event;
    console.log(this.isDarkMode);
  }
}
