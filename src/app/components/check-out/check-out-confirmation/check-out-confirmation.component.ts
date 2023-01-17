import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BreadcrumbsItems} from "../../shared/breadcrumbs/breadcrumbs.component";
import {ProfileService} from "../../../data/profile.service";
import User from "../../../model/User";
import {FetcherService} from "../../../helpers/fetcher/fetcher.service";
import Order from "../../../model/Order";
import {CartElement, CartService} from "../../../helpers/cart/cart.service";

@Component({
  selector: 'app-check-out-confirmation',
  templateUrl: './check-out-confirmation.component.html',
  styleUrls: ['./check-out-confirmation.component.scss']
})
export class CheckOutConfirmationComponent implements OnInit, OnDestroy {

  breadcrumbs: BreadcrumbsItems = [{label: 'Cart', link: ['/']}, {label: 'Information'}];

  profile: User | null = null;

  private sub: any;

  constructor(private profileService: ProfileService, private fetcher: FetcherService, private cartService: CartService) {

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
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
      address: new FormControl(this.profile?.email, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    }
  );

  ngOnInit(): void {
    this.sub = this.profileService.profile$.subscribe(
      data => {
        this.profile = data;
      }
    )

  }

  formatCartElements(cartElement: CartElement[]) {
    return cartElement.map((el) => {
      return ({
        'productId': el.product.id,
        'quantity': el.amount
      })
    })
  }

  onSubmit(form: any) {
    console.log(form)
    this.fetcher.post<Order>('/orders', {
      'orderItems': this.formatCartElements(this.cartService.getFromLocalStorage()),
      'user': {'id': this.profile?.id},
      'shippingAddress': form.address

    }).subscribe()
  }

}
