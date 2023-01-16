import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { FetcherService } from '../helpers/fetcher/fetcher.service';
import { ProfileResponseData } from './types';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private readonly fetcherService: FetcherService) {}

  getProfile() {
    return this.fetcherService.get<ProfileResponseData>('profile');
  }

  changePassword(currentPassword: string, newPassword: string) {
    return this.fetcherService.post<ProfileResponseData>(
      'profile/change-password',
      {
        currentPassword,
        password: newPassword,
      }
    );
  }

  profile$ = this.getProfile().pipe(map((response) => response.data));
}
