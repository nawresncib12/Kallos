import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { passwordMatchValidator } from './password-match.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}
  registerForm = new FormGroup(
    {
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      address: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    },
    [passwordMatchValidator]
  );

  onChange(): void {
    console.log(this.registerForm.errors);
    console.log(this.registerForm.get('password')?.errors);
  }
  async onSubmit() {
    if (this.registerForm.invalid) return;

    const response = await firstValueFrom(
      this.authService.register({
        firstName: this.registerForm.value.firstName!,
        lastName: this.registerForm.value.lastName!,
        address: this.registerForm.value.address ?? '',
        email: this.registerForm.value.email!,
        password: this.registerForm.value.password!,
      })
    );

    if (response) {
      this.router.navigate(['/login']);
      // TODO: Show success message
    }
  }
  ngOnInit(): void {}
}
