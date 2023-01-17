import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { FetcherService } from '../helpers/fetcher/fetcher.service';
import User from '../model/User';
import { ProfileResponseData } from './types';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private readonly fetcherService: FetcherService) {
    this.getProfile().subscribe((response) => {
      console.log(response);
    });
  }

  getProfile() {
    return this.fetcherService.get<ProfileResponseData>('profile').pipe(
      map((response) => {
        this.profile_subject$.next(response.data);
        return response.data;
      })
    );
  }

  changePassword(currentPassword: string, newPassword: string) {
    return this.fetcherService
      .post<ProfileResponseData>('profile/change-password', {
        currentPassword,
        password: newPassword,
      })
      .pipe(
        map((response) => {
          this.profile_subject$.next(response.data);
          return response.data;
        })
      );
  }

  updateProfile(profile: Partial<User>) {
    return this.fetcherService
      .post<ProfileResponseData>('profile', profile)
      .pipe(
        map((response) => {
          this.profile_subject$.next(response.data);
          return response.data;
        })
      );
  }

  profile_subject$ = new BehaviorSubject<ProfileResponseData | null>(null);
  profile$ = this.profile_subject$.asObservable();
}
