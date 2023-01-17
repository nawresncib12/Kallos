import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Product} from "../../model/Product";
import {FetcherService} from "../../helpers/fetcher/fetcher.service";
import ApiResponse from "../../data/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  private product= new BehaviorSubject<Product>(new Product());
  private selectedImageIndex = new Subject<number>();
  product$ : Observable<Product> = this.product.asObservable();
  selectedImageIndex$: Observable<number> = this.selectedImageIndex.asObservable();

  constructor(private fetcherService: FetcherService) {}

  setProduct(product: Product) {
    this.product.next(product)
  }

  setSelectedImage(index: number) {
    this.selectedImageIndex.next(index)
  }

  getProductById(id: number): Observable<ApiResponse<Product>> {
    return this.fetcherService.get<Product>(`products/${id}`)
  }

}
