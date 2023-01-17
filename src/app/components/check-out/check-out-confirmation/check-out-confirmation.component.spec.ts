import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutConfirmationComponent } from './check-out-confirmation.component';

describe('CheckOutConfirmationComponent', () => {
  let component: CheckOutConfirmationComponent;
  let fixture: ComponentFixture<CheckOutConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckOutConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
