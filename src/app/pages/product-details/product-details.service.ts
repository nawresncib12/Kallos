import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Product} from "../../models/Product";
import Category from "../../enums/Category";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  private product$ = new BehaviorSubject<Product>(new Product());
  private selectedImageIndex$ = new Subject<number>();
  product: Observable<Product> = this.product$.asObservable();
  selectedImageIndex: Observable<number> = this.selectedImageIndex$.asObservable();

  constructor() {}

  setProduct(product: Product) {
    this.product$.next(product)
  }

  setSelectedImage(index: number) {
    this.selectedImageIndex$.next(index)
  }

  getProductById(id: number): Product {
     return new  Product({
      id,
      images: ["https://i.picsum.photos/id/621/500/500.jpg?hmac=N9J7TFMbk9N-Q1eYk7H4t52uRi_QUnkBj3mrDviHrsw", "https://i.picsum.photos/id/1070/500/500.jpg?hmac=fFiEzBh4MVKg9RRd9A3Rdsbvza9QeuqcnNdsKHJzo-8", "https://i.picsum.photos/id/125/500/500.jpg?hmac=7EMUzRiIV-GQymzrmLg9l3Yow2IEkgzfDtQP28pyPtI", "https://i.picsum.photos/id/293/500/500.jpg?hmac=ZafKF5N85SX8CpjmsXr0Gzr0yUA5-b7RMRgrwLfoMMA", "https://i.picsum.photos/id/50/500/500.jpg?hmac=-YrZ8RtOOc6UkZhUjsiGQNQ9DJN4tuJH4W6vHQq0i_4"],
      category: Category.CANDLES,
      name: "test",
      price: 1000,
      description: "test"
    });

  }

}
