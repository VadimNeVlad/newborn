import { Action, createReducer, on } from '@ngrx/store';
import { modalClose, modalOpen } from './modal.actions';

export const modalFeatureKey = 'modal';

export interface ModalState {
  modalOpen: string;
}

export const initialState: ModalState = {
  modalOpen: '',
};

export const modalReducer = createReducer(
  initialState,
  on(modalOpen, (state, { modalOpen }) => ({
    ...state,
    modalOpen,
  })),
  on(modalClose, (state) => ({
    ...state,
    modalOpen: '',
  }))
);
