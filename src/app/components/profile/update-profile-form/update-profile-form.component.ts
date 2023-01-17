import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProfileService} from 'src/app/data/profile.service';
import {ToasterService} from 'src/app/helpers/toaster/toaster.service';

@Component({
  selector: 'app-update-profile-form',
  templateUrl: './update-profile-form.component.html',
  styleUrls: ['./update-profile-form.component.scss'],
})
export class UpdateProfileFormComponent implements OnInit {
  loading: boolean = false
  constructor(
    private readonly profileService: ProfileService,
    private readonly toastService: ToasterService
  ) {
  }

  @Output() cancelClick = new EventEmitter();
  $profile = this.profileService.profile$;

  updateProfileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  });

  onSubmit() {
    this.loading = true;
    this.profileService.updateProfile({
      firstName: this.updateProfileForm.value.firstName ?? '',
      lastName: this.updateProfileForm.value.lastName ?? '',
      email: this.updateProfileForm.value.email ?? '',
      phone: this.updateProfileForm.value.phone ?? '',
      address: this.updateProfileForm.value.address ?? '',
    }).subscribe({
      next: (response) => {
        this.toastService.toastApiResponse(response);
        this.cancelClick.emit();
      },
      error: error => this.toastService.toastApiResponse(error.error),
      complete: () => this.loading = false
    })
  }

  onCancelClick() {
    this.cancelClick.emit();
  }

  ngOnInit(): void {
    this.$profile.subscribe((profile) => {
      console.log("updated", profile)
      this.updateProfileForm.patchValue({
        firstName: profile?.firstName,
        lastName: profile?.lastName,
        email: profile?.email,
        phone: profile?.phone,
        address: profile?.address,
      });
    });
  }

  ngOnDestroy(): void {
  }
}
