import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {firstValueFrom, tap} from 'rxjs';
import {AuthService} from 'src/app/auth/auth.service';
import {ProfileService} from 'src/app/data/profile.service';
import {ToasterService} from "../../../helpers/toaster/toaster.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loading: boolean = false;

  constructor(
    private readonly authService: AuthService,
    private readonly profileService: ProfileService,
    private router: Router,
    private readonly toasterService: ToasterService
  ) {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onSubmit() {
    if (this.loginForm.invalid) return;
    if (!this.loginForm.value.email || !this.loginForm.value.password) return;

    this.loading = true;
    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    ).subscribe({
      next: response => {
        if (response.isOk()) {
          this.profileService.getProfile().subscribe();
          this.toasterService.toaster.success("Logged in!");
        }
      },
      error: (error) => {
        this.toasterService.toastApiResponse(error.error);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
        this.router.navigate(['/profile']);
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
