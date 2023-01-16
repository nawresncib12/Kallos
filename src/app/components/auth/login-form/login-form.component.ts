import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
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

  onSubmit(): void {
    if (this.loginForm.invalid) return;
    if (!this.loginForm.value.email || !this.loginForm.value.password) return;

    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(() => {
        console.log('Login successful!');
        this.router.navigate(['/profile']);
      });
  }

  ngOnInit(): void {}
}
