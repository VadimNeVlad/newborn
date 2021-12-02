import { createAction, props } from '@ngrx/store';
import { Overview } from 'src/app/shared/models/overview';

export const getOverview = createAction('[Overview] Get Overview');

export const getOverviewSuccess = createAction(
  '[Overview] Get Overview Success',
  props<{ overview: Overview }>()
);
