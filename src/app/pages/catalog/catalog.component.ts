import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/components/catalog/catalog-element/catalog-element.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  title: string = "All Products"
  categoriesArray = [{ id: 1, name: Categories.candle }, { id: 2, name: Categories.jewlery }, { id: 3, name: Categories.makeup }, { id: 4, name: Categories.sculpt },]
  categories = Categories
  products: any[] = [
    { category: "candle", imagePath: "sample2.png", price: 300 },
    { category: "jewlery", imagePath: "sample3.png", price: 100 },
    { category: "makeup", imagePath: "sample.png", price: 200 },
    { category: "makeup", imagePath: "sample.png", price: 200 },
    { category: "jewlery", imagePath: "sample3.png", price: 100 },
    { category: "makeup", imagePath: "sample.png", price: 200 },
    { category: "jewlery", imagePath: "sample3.png", price: 100 },
    { category: "makeup", imagePath: "sample.png", price: 200 },
    { category: "jewlery", imagePath: "sample3.png", price: 100 },
    { category: "makeup", imagePath: "sample.png", price: 200 },
    { category: "makeup", imagePath: "sample.png", price: 200 },

  ]
  currentCategory:any
  constructor() { }

  ngOnInit(): void {
  }

}
