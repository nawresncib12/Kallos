import { Component, OnInit } from '@angular/core';
import Category from 'src/app/enums/Category';
import { Product } from 'src/app/model/Product';
import { CatalogService } from 'src/app/pages/catalog/catalog.service';
@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss'],
})
export class ValuesComponent implements OnInit {
  products: Product[] = [];
  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.getLatestProducts();
  }
  getLatestProducts() {
    this.catalogService.getLatetsProducts().subscribe((response) => {
      this.products = response.data;
    });
  }
}
