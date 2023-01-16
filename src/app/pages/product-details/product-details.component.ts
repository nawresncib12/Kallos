import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadcrumbsItems} from 'src/app/components/shared/breadcrumbs/breadcrumbs.component';
import {Product} from "../../model/Product";
import {Subject, Subscription, takeUntil} from "rxjs";
import {ProductDetailsService} from "./product-details.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  selectedImage: number = 0;
  product!: Product;
  breadcrumbs!: BreadcrumbsItems;
  private destroyed$ = new Subject<void>()

  constructor(private productDetailsService: ProductDetailsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(takeUntil(this.destroyed$)).subscribe(
      params => {
        const product = this.productDetailsService.getProductById(params["id"]);
        this.productDetailsService.setProduct(product);
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
