import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbsItems} from 'src/app/components/shared/breadcrumbs/breadcrumbs.component';
import {Product} from "../../model/Product";
import {Subject, takeUntil} from "rxjs";
import {ProductDetailsService} from "./product-details.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  selectedImage: number = 0;
  product!: Product;
  loading: boolean = false
  breadcrumbs!: BreadcrumbsItems;
  private destroyed$ = new Subject<void>()

  constructor(private productDetailsService: ProductDetailsService, private activatedRoute: ActivatedRoute, private router: Router) {
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
              } else {
                this.router.navigate(['products'])
              }
            },
            complete: () => this.loading = false
          });
      }
    )

    this.productDetailsService.product$.pipe(takeUntil(this.destroyed$)).subscribe(
      product => {
        this.product = product;
        this.breadcrumbs = [{label: 'products', link: ['/products']}, {label: product.name}]
      }
    );

    this.productDetailsService.selectedImageIndex$.pipe(takeUntil(this.destroyed$)).subscribe(
      index => this.selectedImage = index
    );
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
