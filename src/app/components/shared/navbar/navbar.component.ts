import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() nav: boolean = false;
  closing: boolean;
  @Output() navChange = new EventEmitter();
  constructor() {
    this.closing = this.nav;
  }

  ngOnInit(): void {}
  closeNav() {
    this.closing = true;
    setTimeout(() => {
      this.navChange.emit(false);
      this.closing = false;
    }, 1000);
  }
}
