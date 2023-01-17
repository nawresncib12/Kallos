import { Component, OnInit } from '@angular/core';
import Category from 'src/app/enums/Category';
import { Product } from 'src/app/model/Product';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  title: string = "All Products"
  filtersArray = [{ id: 0, name: "No filter" }, { id: 1, name: "from - to +" }, { id: 2, name: "from + to -" }, { id: 3, name: "from A to Z" }, { id: 4, name: "from Z to A" },]
  show: boolean = false
  products: Product[] = [
    { category: Category.CANDLES, images: ["sample2.png"], price: 300, name: "test", id: 0, description: "test" },
    { category: Category.JEWELRY, images: ["sample3.png"], price: 100, name: "test", id: 0, description: "test" },
    { category: Category.MAKEUP, images: ["sample.png",], price: 200, name: "test", id: 0, description: "test" },
    { category: Category.MAKEUP, images: ["sample.png",], price: 200, name: "test", id: 0, description: "test" },
    { category: Category.JEWELRY, images: ["sample3.png"], price: 100, name: "test", id: 0, description: "test" },
    { category: Category.MAKEUP, images: ["sample.png",], price: 200, name: "test", id: 0, description: "test" },
    { category: Category.JEWELRY, images: ["sample3.png"], price: 100, name: "test", id: 0, description: "test" },
    { category: Category.MAKEUP, images: ["sample.png",], price: 200, name: "test", id: 0, description: "test" },
    { category: Category.JEWELRY, images: ["sample3.png"], price: 100, name: "test", id: 0, description: "test" },
    { category: Category.MAKEUP, images: ["sample.png",], price: 200, name: "test", id: 0, description: "test" },
    { category: Category.MAKEUP, images: ["sample.png",], price: 200, name: "test", id: 0, description: "test" },

  ]
  currentFilter: any = 0;
  currentCategory: any = "All products"
  currentPage: number = 0;
  currentShowenProducts: any[] = []
  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.changePage(0)
    this.getAllProducts()
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
  getAllProducts() {
    this.catalogService.getAllProducts().subscribe((response) => {
      this.products = response.data
    })
  }
}
