import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderExpandedTrackOrderComponent } from './order-expanded-track-order.component';

describe('OrderExpandedTrackOrderComponent', () => {
  let component: OrderExpandedTrackOrderComponent;
  let fixture: ComponentFixture<OrderExpandedTrackOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderExpandedTrackOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderExpandedTrackOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
