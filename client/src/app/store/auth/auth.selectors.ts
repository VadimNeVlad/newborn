import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthFeature = createFeatureSelector<AuthState>('auth');

export const selectIsLoggedIn = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.isAuth
);

export const selectIsSubmiting = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.isLoading
);

export const selectCurrentUserEmail = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.currentUserEmail
);
