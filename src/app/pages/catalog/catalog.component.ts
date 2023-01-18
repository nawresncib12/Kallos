import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Category from 'src/app/enums/Category';
import { Product } from 'src/app/model/Product';
import { CatalogService } from './catalog.service';
import { CartService } from '../../helpers/cart/cart.service';
import { ToasterService } from '../../helpers/toaster/toaster.service';
import { map } from 'rxjs';
import { ExtractData, ProductsResponse } from 'src/app/data/types';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  title: string = 'All Products';
  filtersArray = [
    { id: 0, name: 'No filter' },
    { id: 1, name: 'from - to +' },
    { id: 2, name: 'from + to -' },
    {
      id: 3,
      name: 'from A to Z',
    },
    { id: 4, name: 'from Z to A' },
  ];
  show: boolean = false;
  products: Product[] = [];
  currentFilter: number = 0;
  currentCategory: Category | 'All products' = 'All products';
  currentPage: number = 0;
  currentShownProducts: ExtractData<ProductsResponse> = [];
  onSearch: boolean = false;
  categories = Category;

  constructor(
    private catalogService: CatalogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private toaster: ToasterService
  ) {}

  ngOnInit(): void {
    this.changePage(0);
    this.getAllProducts();

    this.activatedRoute.params.subscribe((params) => {
      if (params['category']) {
        this.changeCategory(params['category'].toUpperCase() as Category);
      }
    });
  }

  changeCategory(category: Category | 'All products') {
    this.currentCategory = category;
    if (category !== 'All products') {
      this.currentShownProducts = this.products.filter(
        (element: Product) => element.category === category
      );
      this.router.navigate(['products', 'category', category.toLowerCase()]);
    } else {
      this.currentShownProducts = this.products;
      this.router.navigate(['products']);
    }
    this.filterProducts(this.currentFilter);
  }

  changePage(pageIndex: number) {
    this.currentShownProducts = this.products.slice(
      pageIndex * 10,
      pageIndex * 10 + 10
    );
    this.currentPage = pageIndex;
  }

  getAllProducts() {
    this.catalogService.getAllProducts().subscribe((response) => {
      this.products = response.data;
      this.currentShownProducts = this.products;
      this.changeCategory(this.currentCategory);
    });
  }

  filterProducts(filter: number) {
    this.currentFilter = filter;
    const data = this.products;
    switch (filter) {
      case 0:
        break;
      case 1:
        this.currentShownProducts = this.currentShownProducts.sort(
          (a, b) => a.price - b.price
        );
        break;
      case 2:
        this.currentShownProducts = this.currentShownProducts.sort(
          (a, b) => b.price - a.price
        );
        break;
      case 3:
        this.currentShownProducts = this.currentShownProducts.sort(
          (a: Product, b: Product) => {
            return a.name.localeCompare(b.name);
          }
        );
        break;
      case 4:
        this.currentShownProducts = this.currentShownProducts.sort(
          (a: Product, b: Product) => {
            return b.name.localeCompare(a.name);
          }
        );
        break;
    }
  }

  onSearchActivated() {
    this.onSearch = true;
  }

  performSearch(data: string) {
    this.changeCategory(this.currentCategory);

    this.onSearch = false;
    this.currentShownProducts = this.products.filter(
      (element: Product) =>
        element.name.includes(data) || element.description.includes(data)
    );
  }

  goToProduct(id: string) {
    this.router.navigate(['products/' + id]);
  }

  onCartActivated() {
    this.router.navigate(['/cart']);
  }

  addProductToCart(product: Product) {
    this.cartService.addToCart(product);
    this.toaster.toaster.success('product added to cart');
  }

  isInCart(product: Product) {
    return this.cartService.cartElements$.pipe(
      map((cartElements) => {
        return !!cartElements.find(
          (cartElement) => cartElement.product.id == product.id
        );
      })
    );
  }
}
