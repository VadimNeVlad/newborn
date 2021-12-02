import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromOrder from './order.reducer';

export const selectOrderFeature =
  createFeatureSelector<fromOrder.OrderState>('order');

export const selectOrders = createSelector(
  selectOrderFeature,
  fromOrder.selectAll
);

export const selectOrderisPending = createSelector(
  selectOrderFeature,
  (state) => state.pending
);

export const selectOrderIsLoading = createSelector(
  selectOrderFeature,
  (state) => state.loading
);

export const selectOrderIsLast = createSelector(
  selectOrderFeature,
  (state) => state.isLastOrders
);
