import {Component, OnInit} from '@angular/core';
import {ProductDetailsService} from "../../../../pages/product-details/product-details.service";

@Component({
  selector: 'app-product-details-specifications',
  templateUrl: './product-details-specifications.component.html',
  styleUrls: ['./product-details-specifications.component.scss']
})
export class ProductDetailsSpecificationsComponent implements OnInit {

  constructor(public productDetailsService: ProductDetailsService) {}

  ngOnInit(): void {}

}
