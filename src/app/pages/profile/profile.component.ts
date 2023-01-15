import { Component, OnInit } from '@angular/core';
import { mockUser } from './mock';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user = mockUser;
  constructor() {}

  ngOnInit(): void {}
}
