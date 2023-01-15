import { Component, OnInit } from '@angular/core';
import { BreadcrumbsItems } from 'src/app/components/shared/breadcrumbs/breadcrumbs.component';
import {Product} from "../../models/Product";
import {Subscription} from "rxjs";
import {ProductDetailsService} from "./product-details.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  selectedImage: number = 0;
  product!: Product;
  breadcrumbs!: BreadcrumbsItems;
  private paramsSubscription!: Subscription
  private selectedImageSubscription!: Subscription
  private productSubscription!: Subscription

  constructor(private productDetailsService: ProductDetailsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params.subscribe(
      params => {
        const product = this.productDetailsService.getProductById(params["id"]);
        this.productDetailsService.setProduct(product);
      }
    )

    this.productSubscription = this.productDetailsService.product.subscribe(
      product => {
        this.product = product;
        this.breadcrumbs = [{label: 'products', link: ['/products']}, {label: product.name}]
      }
    );

    this.selectedImageSubscription = this.productDetailsService.selectedImageIndex.subscribe(
      index => this.selectedImage = index
    );
  }
}
