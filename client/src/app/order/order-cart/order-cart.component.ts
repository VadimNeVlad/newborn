import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OrderListItem } from 'src/app/shared/models/order-list-item';
import { OrderListBuilderService } from 'src/app/shared/services/order-list-builder.service';
import { modalClose } from 'src/app/store/modal/modal.actions';
import { addOrder } from 'src/app/store/order/order.actions';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderCartComponent {
  @Input() orderList: OrderListItem[] = [];
  @Input() price = 0;
  @Input() pending = false;
  @Input() currentModal: string | null = null;

  @Output() closeModal = new EventEmitter<void>();
  @Output() deleteItem = new EventEmitter<string>();
  @Output() submit = new EventEmitter<void>();

  constructor() {}

  trackById(idx: number, order: OrderListItem): string {
    return order._id || '';
  }

  onCloseModal(): void {
    this.closeModal.emit();
  }

  onDeleteItem(id: string): void {
    this.deleteItem.emit(id);
  }

  onSubmit(): void {
    this.submit.emit();
  }
}
