import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromOverviews from './overview.reducer';

export const selectOverviewsFeature =
  createFeatureSelector<fromOverviews.OverviewState>('overview');

export const selectOverview = createSelector(
  selectOverviewsFeature,
  (state) => state.overview
);

export const selectOverviewIsLoading = createSelector(
  selectOverviewsFeature,
  (state) => state.loading
);
