import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ApiResponse from 'src/app/data/ApiResponse';
import { FetcherService } from 'src/app/helpers/fetcher/fetcher.service';
import { Product } from 'src/app/model/Product';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(private fetcherService: FetcherService) {}

  getAllProducts(): Observable<ApiResponse<Product[]>> {
    return this.fetcherService.get<Product[]>('products');
  }
  getLatetsProducts(): Observable<ApiResponse<Product[]>> {
    return this.fetcherService.get<Product[]>('products/latest');
  }
}
