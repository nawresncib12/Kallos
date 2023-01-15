import { Component, OnInit } from '@angular/core';
import { BreadcrumbsItems } from 'src/app/components/shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  breadcrumbs: BreadcrumbsItems = [{ label: 'products', link: ['/products'] }];
  constructor() {}

  ngOnInit(): void {}
}
