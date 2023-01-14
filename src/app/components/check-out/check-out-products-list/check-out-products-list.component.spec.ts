import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutProductsListComponent } from './check-out-products-list.component';

describe('CheckOutProductsListComponent', () => {
  let component: CheckOutProductsListComponent;
  let fixture: ComponentFixture<CheckOutProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutProductsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckOutProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
