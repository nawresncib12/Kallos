import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { passwordMatchValidator } from 'src/app/components/auth/register-form/password-match.validator';
import { ProfileService } from 'src/app/data/profile.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  constructor(private readonly profileServie: ProfileService) {}

  changePasswordForm = new FormGroup(
    {
      currentPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
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

  async onSubmit() {
    if (this.changePasswordForm.invalid) return;
    if (
      !this.changePasswordForm.value.currentPassword ||
      !this.changePasswordForm.value.password ||
      !this.changePasswordForm.value.confirmPassword
    )
      return;

    const response = await firstValueFrom(
      this.profileServie.changePassword(
        this.changePasswordForm.value.currentPassword,
        this.changePasswordForm.value.password
      )
    );

    if (response) {
      this.changePasswordForm.reset();
      // TODO: Show success message
    }
  }

  ngOnInit(): void {}
}
