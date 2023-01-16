import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from 'src/app/helpers/fecher/data-fetcher.service';
import { mockUser, User } from './mock';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user = mockUser;
  constructor(private readonly dataFetcher: DataFetcherService) {}

  ngOnInit(): void {
    this.dataFetcher.get<User>('profile').subscribe((res) => {
      this.user = res;
    });
  }
}
