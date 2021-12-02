import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderListComponent {
  @Input() orders: Category[] = [];

  baseUrl = environment.apiUrl + '/';

  constructor() {}

  trackById(idx: number, category: Category): string {
    return category._id || '';
  }
}
