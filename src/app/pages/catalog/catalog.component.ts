import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  products: Product[] = []
  currentFilter: any = 0;
  currentCategory: any = "All products"
  currentPage: number = 0;
  currentShowenProducts: any[] = []
  onSearch: boolean = false;
  categories = Category
  constructor(private catalogService: CatalogService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.changePage(0)
    this.getAllProducts()

    this.activatedRoute.params.subscribe(
      params => {
        if (params['category']) {
          for (let item in this.categories) {
            if (item == params['category'].toUpperCase()) {
              this.currentCategory = item
            }
          }
        }
      })
  }
  changeCategory(category: any) {
    this.currentShowenProducts = this.products.filter((product: Product) => product.category == category)
    if (this.currentCategory == category) {
      this.currentCategory = this.filtersArray[0]
      this.router.navigate(['products'])
    } else {
      this.currentCategory = category
      this.router.navigate(['products/category/' + this.currentCategory.toLowerCase()])
    }
  }
  changePage(pageIndex: number) {
    this.currentShowenProducts = this.products.slice(pageIndex * 10, pageIndex * 10 + 10)
    this.currentPage = pageIndex;
  }
  getAllProducts() {
    this.catalogService.getAllProducts().subscribe((response) => {
      this.products = response.data
      this.currentShowenProducts = this.products
    })
  }

  filterProducts(filter: any) {
    const data = this.products;
    switch (filter) {
      case 0:
        this.currentShowenProducts = data;
        break;
      case 1:
        this.currentShowenProducts = data.sort((a, b) => a.price - b.price)
        break;
      case 2:
        this.currentShowenProducts = data.sort((a, b) => b.price - a.price)
        break;
      case 3:
        this.currentShowenProducts = data.sort((a: Product, b: Product) => { return a.name.localeCompare(b.name) })
        break;
      case 4:
        this.currentShowenProducts = data.sort((a: Product, b: Product) => { return b.name.localeCompare(a.name) })
        break;

    }
  }
  onSearchActivated() {
    this.onSearch = true;
  }
  performSearch(data: string) {
    this.changeCategory(this.currentCategory)

    this.onSearch = false;
    this.currentShowenProducts = this.products.filter((element: Product) =>
      element.name.includes(data) || element.description.includes(data))
  }
  goToProduct(id: string) {
    this.router.navigate(['products/' + id])
  }
  onCartActivated() {
  }
  addProductToCart(item: Product) {

  }
}
