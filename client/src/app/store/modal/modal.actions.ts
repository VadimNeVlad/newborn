import { createAction, props } from '@ngrx/store';

export const modalOpen = createAction(
  '[Modal] Modal Open',
  props<{ modalOpen: string }>()
);

export const modalClose = createAction('[Modal] Modal Close');
