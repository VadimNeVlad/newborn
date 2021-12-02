import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { OrderListItem } from 'src/app/shared/models/order-list-item';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
  @Input() positions: OrderListItem[] = [];

  @Output() addItem = new EventEmitter<OrderListItem>();

  constructor() {}

  trackById(idx: number, position: OrderListItem): string {
    return position._id || '';
  }

  onAddItem(position: OrderListItem): void {
    this.addItem.emit(position);
  }
}
