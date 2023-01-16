import { Component, OnInit } from '@angular/core';
import { OrdersResponse, ProfileResponse } from 'src/app/data/types';
import { DataFetcherService } from 'src/app/helpers/fecher/data-fetcher.service';
import { mockOrders, mockUser } from './mock';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: ProfileResponse['data'] | null = null;
  orders: OrdersResponse | null = {
    data: mockOrders,
    message: 'success',
    status: 200,
  };
  constructor(private readonly dataFetcher: DataFetcherService) {}

  ngOnInit(): void {
    this.dataFetcher.get<ProfileResponse>('profile').subscribe((res) => {
      this.user = res.data;
    });
  }
}
