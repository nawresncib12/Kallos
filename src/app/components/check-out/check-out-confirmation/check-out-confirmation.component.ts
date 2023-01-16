import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-check-out-confirmation',
  templateUrl: './check-out-confirmation.component.html',
  styleUrls: ['./check-out-confirmation.component.scss']
})
export class CheckOutConfirmationComponent implements OnInit {

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
