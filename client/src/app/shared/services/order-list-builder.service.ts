import { Injectable } from '@angular/core';
import { OrderListItem } from '../models/order-list-item';

@Injectable({
  providedIn: 'root',
})
export class OrderListBuilderService {
  public orderList: OrderListItem[] = [];
  public price = 0;

  constructor() {}

  addItem(item: OrderListItem) {
    const sameItem = this.orderList.find(
      (orderItem) => orderItem._id === item._id
    );

    if (sameItem) {
      sameItem.quantity += item.quantity;
    } else {
      this.orderList.push(item);
    }

    this.calculatePrice();
  }

  removeItem(id: string) {
    const idx = this.orderList.findIndex((item) => item._id === id);
    this.orderList.splice(idx, 1);

    this.calculatePrice();
  }

  clearItems() {
    this.orderList = [];
    this.price = 0;
  }

  private calculatePrice() {
    this.price = this.orderList.reduce(
      (acc, curr) => (acc += curr.quantity * curr.cost),
      0
    );
  }
}
