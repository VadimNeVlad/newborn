import { TestBed } from '@angular/core/testing';

import { OrderListBuilderService } from './order-list-builder.service';

describe('OrderListBuilderService', () => {
  let service: OrderListBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderListBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
