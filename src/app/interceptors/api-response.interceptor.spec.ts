import { TestBed } from '@angular/core/testing';

import { ApiResponseInterceptor } from './api-response.interceptor';

describe('ApiResponseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiResponseInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiResponseInterceptor = TestBed.inject(ApiResponseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
