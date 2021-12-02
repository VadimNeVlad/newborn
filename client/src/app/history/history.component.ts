import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Filter } from '../shared/models/filter';
import { Order } from '../shared/models/order';
import { OrderListItem } from '../shared/models/order-list-item';
import { OrderService } from '../shared/services/order.service';
import { logout } from '../store/auth/auth.actions';
import { modalClose, modalOpen } from '../store/modal/modal.actions';
import { selectModalOpenType } from '../store/modal/modal.selectors';
import {
  clearOrders,
  getOrders,
  loadMoreOrders,
  searchOrders,
} from '../store/order/order.actions';
import {
  selectOrderIsLast,
  selectOrderIsLoading,
  selectOrderisPending,
  selectOrders,
} from '../store/order/order.selectors';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit, OnDestroy {
  orders$ = new Observable<Order[]>();
  modalOpenType$ = new Observable<string>();
  isLoading$ = new Observable<boolean>();
  isLastOrder$ = new Observable<boolean>();
  isPending$ = new Observable<boolean>();

  filter: Filter = {};
  order!: Order;
  filterVisible = false;

  constructor(private store: Store, private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders$ = this.store.select(selectOrders);
    this.modalOpenType$ = this.store.select(selectModalOpenType);
    this.isLoading$ = this.store.select(selectOrderIsLoading);
    this.isLastOrder$ = this.store.select(selectOrderIsLast);
    this.isPending$ = this.store.select(selectOrderisPending);

    this.getOrders();
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearOrders());
  }

  trackById(idx: number, orderList: OrderListItem): string {
    return orderList._id || '';
  }

  loadMore(): void {
    this.orderService.offset += this.orderService.step;
    this.getLoadMoreOrders();
  }

  queryParamsValues(): Filter {
    const params = Object.assign({}, this.filter, {
      offset: this.orderService.offset,
      limit: this.orderService.limit,
    });

    return params;
  }

  getOrders(): void {
    const params = this.queryParamsValues();
    this.store.dispatch(getOrders({ params }));
  }

  getLoadMoreOrders(): void {
    const params = this.queryParamsValues();
    this.store.dispatch(loadMoreOrders({ params }));
  }

  getOrderInfo(order: Order): void {
    this.order = order;
  }

  searchOrders(): void {
    const params = this.queryParamsValues();

    this.store.dispatch(searchOrders({ params }));
  }

  applyFilter(filter: Filter): void {
    this.orderService.offset = 0;
    this.filter = filter;

    this.searchOrders();
  }

  calculatePrice(order: Order): number | void {
    if (order) {
      return order.list.reduce(
        (acc, cur) => (acc += cur.cost * cur.quantity),
        0
      );
    }
  }

  logout(): void {
    this.store.dispatch(logout());
  }

  openModal(modalType: string): void {
    this.store.dispatch(modalOpen({ modalOpen: modalType }));
  }

  closeModal(): void {
    this.store.dispatch(modalClose());
  }
}
