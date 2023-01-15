import { Component, Input, OnInit } from '@angular/core';
import { mockUser, User } from 'src/app/pages/profile/mock';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {
  @Input() user: User = mockUser;
  constructor() {}

  ngOnInit(): void {}
}
