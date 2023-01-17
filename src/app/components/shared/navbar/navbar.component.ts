import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ProfileService } from 'src/app/data/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() nav: boolean = false;
  closing: boolean;
  @Output() navChange = new EventEmitter();
  logged = this.authService.isLoggedIn();

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.closing = this.nav;
  }

  ngOnInit(): void { }
  closeNav() {
    this.closing = true;
    setTimeout(() => {
      this.navChange.emit(false);
      this.closing = false;
    }, 1000);
  }
  onClickLogout() {
    this.authService.logout();
    this.goToRoute('/login');
  }
  goToRoute(r: string) {
    this.router.navigate([r]);
    this.closeNav();
  }
}
