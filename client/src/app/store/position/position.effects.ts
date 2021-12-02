import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { map, switchMap } from 'rxjs/operators';
import { Position } from 'src/app/shared/models/position';
import { PositionsService } from 'src/app/shared/services/positions.service';
import { modalClose } from '../modal/modal.actions';
import {
  addPosition,
  addPositionSuccess,
  deletePosition,
  deletePositionSuccess,
  fetchPositions,
  loadPositions,
  updatePosition,
  updatePositionSuccess,
} from './position.actions';

@Injectable()
export class PositionsEffects {
  getPositions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchPositions),
      switchMap(({ categoryId }) => {
        return this.positionsService
          .getPositions(categoryId)
          .pipe(map((positions) => loadPositions({ positions })));
      })
    );
  });

  addPosition$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPosition),
      switchMap(({ position }) => {
        return this.positionsService.addPosition(position).pipe(
          map((position) => {
            this.toastr.success('Позиция Добавлена');
            this.store.dispatch(modalClose());
            return addPositionSuccess({ position });
          })
        );
      })
    );
  });

  updatePosition$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePosition),
      switchMap(({ position }) => {
        return this.positionsService.updatePosition(position).pipe(
          map((position) => {
            const update: Update<Position> = {
              id: position._id || '',
              changes: position,
            };

            this.toastr.success('Позиция Изменена');
            this.store.dispatch(modalClose());

            return updatePositionSuccess({ position: update });
          })
        );
      })
    );
  });

  deletePosition$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePosition),
      switchMap(({ id }) => {
        return this.positionsService.deletePosition(id).pipe(
          map(() => {
            this.toastr.success('Позиция Удалена');
            return deletePositionSuccess();
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private positionsService: PositionsService,
    private toastr: ToastrService,
    private store: Store
  ) {}
}
