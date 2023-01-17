import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  isLoggedIn: boolean = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.authService.loggedIn$.subscribe(loggedIn => this.isLoggedIn = loggedIn)
  }

  canActivate(): boolean {
    if (this.isLoggedIn) return true;
    this.router.navigate(['/login']);
    return false;
  }
}
