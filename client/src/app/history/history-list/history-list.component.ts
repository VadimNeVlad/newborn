import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryListComponent {
  @Input() orders: Order[] = [];

  @Output() orderInfo = new EventEmitter<Order>();
  @Output() modalType = new EventEmitter<string>();

  constructor() {}

  calculatePrice(order: Order): number {
    return order.list.reduce((acc, cur) => (acc += cur.cost * cur.quantity), 0);
  }

  trackById(idx: number, order: Order): string {
    return order._id || '';
  }

  onModalHandle(order: Order, modalType: string): void {
    this.orderInfo.emit(order);
    this.modalType.emit(modalType + order._id);
  }
}
