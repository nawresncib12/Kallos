import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {passwordMatchValidator} from 'src/app/components/auth/register-form/password-match.validator';
import {ProfileService} from 'src/app/data/profile.service';
import {ToasterService} from "../../helpers/toaster/toaster.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  loading: boolean = false;
  constructor(
    private profileService: ProfileService,
    private toasterService: ToasterService,
    private router: Router
  ) {
  }

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

  onSubmit() {
    if (this.changePasswordForm.invalid) return;
    if (
      !this.changePasswordForm.value.currentPassword ||
      !this.changePasswordForm.value.password ||
      !this.changePasswordForm.value.confirmPassword
    )
      return;
    this.loading = true;
    this.profileService.changePassword(
      this.changePasswordForm.value.currentPassword,
      this.changePasswordForm.value.password
    ).subscribe({
      next: (response) => {
        if (response.isOk()) {
          this.toasterService.toastApiResponse(response)
        }
      },
      error: (error) => this.toasterService.toastApiResponse(error.error()),
      complete: () => {
        this.loading = false;
        this.router.navigate(['/profile'])
      }
    })


  }

  ngOnInit(): void {}
}
