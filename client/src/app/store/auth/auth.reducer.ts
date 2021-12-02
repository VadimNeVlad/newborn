import { Action, createReducer, on } from '@ngrx/store';
import {
  login,
  loginFailure,
  loginSuccess,
  logout,
  register,
  registerFailure,
  registerSuccess,
} from './auth.actions';

export interface AuthState {
  currentUserEmail: string;
  isAuth: boolean;
  isLoading: boolean;
}

export const initialState: AuthState = {
  currentUserEmail: '',
  isAuth: false,
  isLoading: false,
};

export const authReducer = createReducer(
  initialState,
  on(
    register,
    (state): AuthState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    registerSuccess,
    (state, action): AuthState => ({
      ...state,
      isLoading: false,
      currentUserEmail: action.currentUserEmail,
    })
  ),
  on(
    registerFailure,
    (state): AuthState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    login,
    (state): AuthState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    loginSuccess,
    (state): AuthState => ({
      ...state,
      isLoading: false,
      isAuth: true,
    })
  ),
  on(
    loginFailure,
    (state): AuthState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    logout,
    (state): AuthState => ({
      ...state,
      isAuth: false,
      currentUserEmail: '',
    })
  )
);
