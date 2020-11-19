import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  google() {
    window.location.href='http://www.google.com/';
  }

  openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  }

  closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  }
}
