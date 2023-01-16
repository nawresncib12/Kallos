import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

import { ProfileService } from 'src/app/data/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$ = this.profileService.profile$;

  constructor(
    private readonly profileService: ProfileService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  onClickLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
