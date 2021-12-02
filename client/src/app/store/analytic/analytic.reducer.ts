import { Action, createReducer, on } from '@ngrx/store';

import * as AnalyticActions from './analytic.actions';
import { Analytics } from 'src/app/shared/models/analytics';

export interface AnalitycsState {
  analytic: Analytics | null;
  loading: boolean;
}

export const initialState: AnalitycsState = {
  analytic: null,
  loading: false,
};

export const analyticsReducer = createReducer(
  initialState,
  on(AnalyticActions.getAnalytics, (state) => ({
    ...state,
    loading: true,
  })),
  on(AnalyticActions.getAnalyticsSuccess, (state, { analytic }) => ({
    ...state,
    analytic,
    loading: false,
  }))
);
