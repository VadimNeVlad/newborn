import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Position } from 'src/app/shared/models/position';
import { modalClose, modalOpen } from 'src/app/store/modal/modal.actions';
import { selectModalOpenType } from 'src/app/store/modal/modal.selectors';
import {
  deletePosition,
  fetchPositions,
} from 'src/app/store/position/position.actions';
import {
  selectPositionIsLoading,
  selectPositions,
} from 'src/app/store/position/position.selectors';

@Component({
  selector: 'app-positions-view',
  templateUrl: './positions-view.component.html',
  styleUrls: ['./positions-view.component.scss'],
})
export class PositionsViewComponent implements OnInit {
  positions$ = new Observable<Position[]>();
  modalOpenType$ = new Observable<string>();
  isLoading$ = new Observable<boolean>();

  categoryId = '';
  position!: Position;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.positions$ = this.store.select(selectPositions);
    this.modalOpenType$ = this.store.select(selectModalOpenType);
    this.isLoading$ = this.store.select(selectPositionIsLoading);
    this.categoryId = this.route.snapshot.paramMap.get('id') || '';

    this.getPositions();
  }

  getPositions(): void {
    this.store.dispatch(fetchPositions({ categoryId: this.categoryId }));
  }

  getPositionInfo(position: Position): void {
    this.position = position;
  }

  deletePosition(): void {
    if (this.position._id) {
      this.store.dispatch(deletePosition({ id: this.position._id }));
    }
  }

  openModal(modalType: string): void {
    this.store.dispatch(modalOpen({ modalOpen: modalType }));
  }

  closeModal(): void {
    this.store.dispatch(modalClose());
  }
}
