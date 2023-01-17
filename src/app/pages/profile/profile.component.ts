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
  TOKEN_KEY = "token"

  constructor(private readonly profileService: ProfileService) {}

  ngOnInit(): void {
    const token = localStorage.getItem(this.TOKEN_KEY);

    if (token) {
      this.profileService.getProfile().subscribe()
    }
  }
}
