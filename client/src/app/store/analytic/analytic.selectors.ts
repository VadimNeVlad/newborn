import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAnalytic from './analytic.reducer';

export const selectAnalyticsFeature =
  createFeatureSelector<fromAnalytic.AnalitycsState>('analytics');

export const selectAnalytic = createSelector(
  selectAnalyticsFeature,
  (state) => state.analytic
);

export const selectAnalyticIsLoading = createSelector(
  selectAnalyticsFeature,
  (state) => state.loading
);
