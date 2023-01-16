import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  async onSubmit() {
    if (this.loginForm.invalid) return;
    if (!this.loginForm.value.email || !this.loginForm.value.password) return;

    const response = await firstValueFrom(
      this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      )
    );

    if (response) {
      this.router.navigate(['/profile']);
    }
  }

  ngOnInit(): void {}
}
