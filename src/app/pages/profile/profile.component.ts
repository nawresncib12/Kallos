import { Component, OnInit } from '@angular/core';
import { OrdersResponse } from 'src/app/data/types';
import { mockOrders, mockUser } from './mock';
import ApiResponse from '../../data/ApiResponse';
import Order from '../../model/Order';
import { ProfileService } from 'src/app/data/profile.service';
import { map } from 'rxjs';
import { OrdersService } from 'src/app/data/orders.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$ = this.profileService.profile$;

  constructor(private readonly profileService: ProfileService) {}

  ngOnInit(): void {}
}
