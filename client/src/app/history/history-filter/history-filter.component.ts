import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

import { Filter } from 'src/app/shared/models/filter';

@Component({
  selector: 'app-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryFilterComponent {
  @Output() filter = new EventEmitter<Filter>();

  orderNumber!: number;
  startDate!: Date;
  endDate!: Date;

  constructor() {}

  onSubmit() {
    const opts: Filter = {};

    if (this.orderNumber) {
      opts.order = this.orderNumber;
    }

    if (this.startDate) {
      opts.start = this.startDate;
    }

    if (this.endDate) {
      opts.end = this.endDate;
    }

    if (this.orderNumber || this.startDate || this.endDate) {
      this.filter.emit(opts);
    }
  }
}
