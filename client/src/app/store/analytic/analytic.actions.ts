import { createAction, props } from '@ngrx/store';

import { Analytics } from 'src/app/shared/models/analytics';

export const getAnalytics = createAction('[Analytic] Get Analytics');

export const getAnalyticsSuccess = createAction(
  '[Analytic] Get Analytics Success',
  props<{ analytic: Analytics }>()
);
