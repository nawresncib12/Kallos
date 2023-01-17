import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.scss'],
})
export class NavbarButtonComponent implements OnInit {
  nav: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  showNav() {
    this.nav = !this.nav;
    if (this.nav) document.body.style.overflow = 'hidden';
  }
  close(value: boolean) {
    this.nav = value;
    if (!this.nav) document.body.style.overflow = 'auto';
  }
}
