import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutProductsListItemComponent } from './check-out-products-list-item.component';

describe('CheckOutProductsListItemComponent', () => {
  let component: CheckOutProductsListItemComponent;
  let fixture: ComponentFixture<CheckOutProductsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutProductsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckOutProductsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
