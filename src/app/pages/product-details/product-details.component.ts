import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbsItems} from 'src/app/components/shared/breadcrumbs/breadcrumbs.component';
import {Subject, takeUntil} from "rxjs";
import {ProductDetailsService} from "./product-details.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToasterService} from "../../helpers/toaster/toaster.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  loading: boolean = false
  breadcrumbs!: BreadcrumbsItems;
  private destroyed$ = new Subject<void>()

  constructor(
    private productDetailsService: ProductDetailsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toaster: ToasterService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(takeUntil(this.destroyed$)).subscribe(
      params => {
        this.loading = true;
        this.productDetailsService.getProductById(params["id"]).subscribe(
          {
            next: response => {
              if (response.isOk()) {
                this.productDetailsService.setProduct(response.data)
                  this.breadcrumbs = [{label: 'products', link: ['/products']}, {label: response.data.name}]
              }
            },
            error: (error) => {
              this.router.navigate(['products'])
              this.toaster.toastApiResponse(error.error)
            },
            complete: () => this.loading = false
          });
      }
    )
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
