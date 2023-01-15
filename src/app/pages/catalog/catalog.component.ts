import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/components/catalog/catalog-element/catalog-element.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  title: string = "All Products"
  filtersArray = [{ id: 0, name: "No filter" }, { id: 1, name: "from - to +" }, { id: 2, name: "from + to -" }, { id: 3, name: "from A to Z" }, { id: 4, name: "from Z to A" },]
  show: boolean = false
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
  currentFilter: any = 0;
  currentCategory: any
  currentPage: number = 0;
  currentShowenProducts: any[] = []
  constructor() { }

  ngOnInit(): void {
    this.changePage(0)
  }
  changeCategory(category: any) {
    this.currentCategory = category
  }
  changePage(pageIndex: number) {
    this.currentShowenProducts = this.products.slice(pageIndex * 10, pageIndex * 10 + 10)
    this.currentPage = pageIndex;
  }
  changeFilter(filter: any) {
    this.currentFilter = filter
  }
}
