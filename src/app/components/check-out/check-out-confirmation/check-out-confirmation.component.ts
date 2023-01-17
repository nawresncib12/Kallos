import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BreadcrumbsItems} from "../../shared/breadcrumbs/breadcrumbs.component";
import {ProfileService} from "../../../data/profile.service";
import User from "../../../model/User";
import {FetcherService} from "../../../helpers/fetcher/fetcher.service";
import Order from "../../../model/Order";
import {CartElement, CartService} from "../../../helpers/cart/cart.service";
import {OrdersService} from "../../../data/orders.service";
import {Router} from "@angular/router";
import {ToasterService} from "../../../helpers/toaster/toaster.service";

@Component({
  selector: 'app-check-out-confirmation',
  templateUrl: './check-out-confirmation.component.html',
  styleUrls: ['./check-out-confirmation.component.scss']
})
export class CheckOutConfirmationComponent implements OnInit, OnDestroy {

  breadcrumbs: BreadcrumbsItems = [{label: 'Cart', link: ['/']}, {label: 'Information'}];

  profile: User | null = null;

  private sub: any;

  loading: boolean = false;

  constructor(private profileService: ProfileService, private fetcher: FetcherService, private cartService: CartService,
              private orderService: OrdersService, private router: Router,
              private readonly toasterService: ToasterService) {

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


  onSubmit(form: any) {

    this.loading = true;
    this.orderService.createOrder(
      form.address, this.profile?.id as number,
      this.cartService.getFromLocalStorage()).subscribe({
      next: response => {
        console.log(response)
        if (response.isOk()) {
          this.profileService.getProfile().subscribe();
          this.toasterService.toaster.success("order created");
          this.router.navigate(['/profile']);
        }
      },
      error: (error) => {
        this.toasterService.toastApiResponse(error.error);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });

  }
}
