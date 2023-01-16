import {Component, OnInit} from '@angular/core';
import {OrdersResponse, ProfileResponse} from 'src/app/data/types';
import {mockOrders, mockUser} from './mock';
import {FetcherService} from "../../helpers/fetcher/fetcher.service";
import ApiResponse from "../../data/ApiResponse";
import Order from "../../model/Order";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: ProfileResponse['data'] | null = null;
  orders: OrdersResponse | null = new ApiResponse<Order[]>({
    data: mockOrders,
    message: 'success',
    status: 200,
  });

  constructor(private readonly fetcherService: FetcherService) {
  }

  ngOnInit(): void {
    this.fetcherService.get<ProfileResponse['data']>('profile').subscribe((res) => {
      this.user = res.data;
    });
  }
}
