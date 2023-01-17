import {Injectable} from '@angular/core';
import {BehaviorSubject, map, tap} from 'rxjs';
import {FetcherService} from '../helpers/fetcher/fetcher.service';
import {ToasterService} from '../helpers/toaster/toaster.service';
import User from '../model/User';
import {ProfileResponseData} from './types';
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profile_subject$ = new BehaviorSubject<ProfileResponseData | null>(null);
  profile$ = this.profile_subject$.asObservable();

  constructor(private readonly fetcherService: FetcherService, private readonly toastService: ToasterService, private authService: AuthService) {
  }

  getProfile() {
    return this.fetcherService.get<ProfileResponseData>('profile').pipe(
      map((response) => {
        this.profile_subject$.next(response.data);
        this.authService.changeLoginState(true)
        return response.data;
      }),
    );
  }

  changePassword(currentPassword: string, newPassword: string) {
    return this.fetcherService
      .post<ProfileResponseData>('profile/change-password', {
        currentPassword,
        password: newPassword,
      })
      .pipe(
        tap((response) => {
          this.toastService.toastApiResponse(response);
        }),
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
        tap((response) => {
          this.toastService.toastApiResponse(response);
        }),
        map((response) => {
          this.profile_subject$.next(response.data);
          return response.data;
        })
      );
  }
}
