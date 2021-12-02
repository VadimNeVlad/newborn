import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Position } from 'src/app/shared/models/position';

export const fetchPositions = createAction(
  '[Position] Load Positions',
  props<{ categoryId: string }>()
);

export const loadPositions = createAction(
  '[Position] Load Positions Success',
  props<{ positions: Position[] }>()
);

export const addPosition = createAction(
  '[Position] Add Position',
  props<{ position: Position }>()
);

export const addPositionSuccess = createAction(
  '[Position] Add Position Success',
  props<{ position: Position }>()
);

export const deletePosition = createAction(
  '[Position] Delete Position',
  props<{ id: string }>()
);

export const deletePositionSuccess = createAction(
  '[Position] Delete Position Success'
);

export const updatePosition = createAction(
  '[Position] Update Position',
  props<{ position: Position }>()
);

export const updatePositionSuccess = createAction(
  '[Position] Update Position Success',
  props<{ position: Update<Position> }>()
);
