import { TestBed } from '@angular/core/testing';

import { DisplayAPIResponseService } from './display-apiresponse.service';

describe('DisplayAPIResponseService', () => {
  let service: DisplayAPIResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayAPIResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
