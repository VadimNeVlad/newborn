import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category';
import { OrderListBuilderService } from 'src/app/shared/services/order-list-builder.service';
import { getCategories } from 'src/app/store/category/category.actions';
import {
  selectCategory,
  selectIsLoading,
} from 'src/app/store/category/category.selectors';
import { modalClose, modalOpen } from 'src/app/store/modal/modal.actions';
import { selectModalOpenType } from 'src/app/store/modal/modal.selectors';
import { addOrder } from 'src/app/store/order/order.actions';
import { selectOrderisPending } from 'src/app/store/order/order.selectors';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss'],
})
export class OrderViewComponent implements OnInit {
  categories$ = new Observable<Category[]>();
  modalOpenType$ = new Observable<string>();
  isLoading$ = new Observable<boolean>();
  isPending$ = new Observable<boolean>();

  constructor(
    private store: Store,
    public orderBuilder: OrderListBuilderService
  ) {}

  ngOnInit(): void {
    this.categories$ = this.store.select(selectCategory);
    this.modalOpenType$ = this.store.select(selectModalOpenType);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.isPending$ = this.store.select(selectOrderisPending);

    this.getCategories();
  }

  getCategories(): void {
    this.store.dispatch(getCategories());
  }

  deleteItem(id: string): void {
    this.orderBuilder.removeItem(id);
  }

  submitOrder(): void {
    const newOrder = this.orderBuilder.orderList.map((item) => {
      return item;
    });

    this.store.dispatch(addOrder({ order: { list: newOrder } }));
  }

  openModal(modalType: string): void {
    this.store.dispatch(modalOpen({ modalOpen: modalType }));
  }

  closeModal(): void {
    this.store.dispatch(modalClose());
  }
}
