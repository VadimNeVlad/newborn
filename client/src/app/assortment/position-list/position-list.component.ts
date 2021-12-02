import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Position } from 'src/app/shared/models/position';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionListComponent {
  @Input() positions: Position[] = [];

  @Output() positionInfo = new EventEmitter<Position>();
  @Output() modalType = new EventEmitter<string>();

  constructor() {}

  trackById(idx: number, position: Position): string {
    return position._id || '';
  }

  onPositionHandle(position: Position, modalType: string): void {
    this.positionInfo.emit(position);
    this.modalType.emit(modalType + position._id);
  }
}
