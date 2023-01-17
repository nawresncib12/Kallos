import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BreadcrumbsItems} from "../../shared/breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-check-out-confirmation',
  templateUrl: './check-out-confirmation.component.html',
  styleUrls: ['./check-out-confirmation.component.scss']
})
export class CheckOutConfirmationComponent implements OnInit {

  breadcrumbs: BreadcrumbsItems = [{label: 'Cart', link: ['/']}, {label: 'Information'}];

  constructor() {
  }

  confirmationForm = new FormGroup(
    {
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    }
  );

  ngOnInit(): void {
  }

  onSubmit() {
  }

}
