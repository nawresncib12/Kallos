import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { ProfileService } from 'src/app/data/profile.service';
import { ToasterService } from 'src/app/helpers/toaster/toaster.service';

@Component({
  selector: 'app-update-profile-form',
  templateUrl: './update-profile-form.component.html',
  styleUrls: ['./update-profile-form.component.scss'],
})
export class UpdateProfileFormComponent implements OnInit {
  constructor(
    private readonly profileService: ProfileService,
    private readonly toastService: ToasterService
  ) {}

  @Output() cancelClick = new EventEmitter();
  $profile = this.profileService.profile$;

  updateProfileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  });

  async onSubmit() {
    const response = await firstValueFrom(
      this.profileService.updateProfile({
        firstName: this.updateProfileForm.value.firstName ?? '',
        lastName: this.updateProfileForm.value.lastName ?? '',
        email: this.updateProfileForm.value.email ?? '',
        phone: this.updateProfileForm.value.phone ?? '',
        address: this.updateProfileForm.value.address ?? '',
      })
    );
  }

  onCancelClick() {
    this.cancelClick.emit();
  }

  ngOnInit(): void {
    this.$profile.subscribe((profile) => {
      this.updateProfileForm.patchValue({
        firstName: profile?.firstName,
        lastName: profile?.lastName,
        email: profile?.email,
        phone: profile?.phone,
        address: profile?.address,
      });
    });
  }

  ngOnDestroy(): void {}
}
