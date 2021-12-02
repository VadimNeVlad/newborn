import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as PositionActions from './position.actions';
import { Position } from 'src/app/shared/models/position';

export interface PositionState extends EntityState<Position> {
  loading: boolean;
  pending: boolean;
}

export const adapter: EntityAdapter<Position> = createEntityAdapter<Position>({
  selectId: (state) => state._id || '',
});

export const initialState: PositionState = adapter.getInitialState({
  loading: false,
  pending: false,
});

export const positionReducer = createReducer(
  initialState,
  on(PositionActions.fetchPositions, (state) => ({
    ...state,
    loading: true,
  })),
  on(PositionActions.loadPositions, (state, { positions }) =>
    adapter.setAll(positions, {
      ...state,
      loading: false,
    })
  ),
  on(PositionActions.addPosition, PositionActions.updatePosition, (state) => ({
    ...state,
    pending: true,
  })),
  on(PositionActions.addPositionSuccess, (state, { position }) =>
    adapter.addOne(position, {
      ...state,
      pending: false,
    })
  ),
  on(PositionActions.deletePosition, (state, { id }) =>
    adapter.removeOne(id, {
      ...state,
      pending: true,
    })
  ),
  on(PositionActions.deletePositionSuccess, (state) => ({
    ...state,
    pending: false,
  })),
  on(PositionActions.updatePositionSuccess, (state, { position }) =>
    adapter.updateOne(position, {
      ...state,
      pending: false,
    })
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const isLoading = (state: PositionState) => state.loading;
export const isPending = (state: PositionState) => state.pending;
