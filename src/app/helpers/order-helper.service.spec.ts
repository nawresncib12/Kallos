import { TestBed } from '@angular/core/testing';

import { OrderHelperService } from './order-helper.service';

describe('OrderHelperService', () => {
  let service: OrderHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
