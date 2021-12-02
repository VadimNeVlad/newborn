import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ModalState } from './modal.reducer';

export const selectModalFeature = createFeatureSelector<ModalState>('modal');

export const selectModalOpenType = createSelector(
  selectModalFeature,
  (state) => state.modalOpen
);
