import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPosition from './position.reducer';

export const selectPositionFeature =
  createFeatureSelector<fromPosition.PositionState>('position');

export const selectPositions = createSelector(
  selectPositionFeature,
  fromPosition.selectAll
);

export const selectPositionIsLoading = createSelector(
  selectPositionFeature,
  (state) => state.loading
);

export const selectPositionIsPending = createSelector(
  selectPositionFeature,
  (state) => state.pending
);
