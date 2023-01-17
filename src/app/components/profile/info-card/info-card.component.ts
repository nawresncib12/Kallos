import { Component, Input, OnInit } from '@angular/core';
import { ProfileResponse, ProfileResponseData } from 'src/app/data/types';
import { mockUser } from 'src/app/pages/profile/mock';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {
  @Input() user: ProfileResponseData | null = mockUser;

  showUpdateProfile = false;

  toggleUpdateProfile(): void {
    this.showUpdateProfile = !this.showUpdateProfile;
  }

  constructor() {}

  ngOnInit(): void {}
}
