import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Product} from "../../model/Product";
import Category from "../../enums/Category";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  private product= new BehaviorSubject<Product>(new Product());
  private selectedImageIndex = new Subject<number>();
  product$ : Observable<Product> = this.product.asObservable();
  selectedImageIndex$: Observable<number> = this.selectedImageIndex.asObservable();

  constructor(private httpClient: HttpClient) {}

  setProduct(product: Product) {
    this.product.next(product)
  }

  setSelectedImage(index: number) {
    this.selectedImageIndex.next(index)
  }

  getProductById(id: number): Observable<Product> {
    this
  }

}
