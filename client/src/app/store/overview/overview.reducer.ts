import { Action, createReducer, on } from '@ngrx/store';

import * as OverviewActions from './overview.actions';
import { Overview } from 'src/app/shared/models/overview';

export const overviewsFeatureKey = 'overviews';

export interface OverviewState {
  loading: boolean;
  overview: Overview | null;
}

export const initialState: OverviewState = {
  loading: false,
  overview: null,
};

export const overviewReducer = createReducer(
  initialState,
  on(OverviewActions.getOverview, (state) => ({
    ...state,
    loading: true,
  })),
  on(OverviewActions.getOverviewSuccess, (state, { overview }) => ({
    ...state,
    overview,
    loading: false,
  }))
);
