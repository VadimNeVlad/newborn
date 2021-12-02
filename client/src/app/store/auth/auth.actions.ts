import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/models/user';

export enum ActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register Success',
  REGISTER_FAILURE = '[Auth] Register Failure',

  LOGIN = '[Login] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',

  LOGOUT = '[Auth] Logout',
}

export const register = createAction(
  ActionTypes.REGISTER,
  props<{ user: User }>()
);

export const registerSuccess = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUserEmail: string }>()
);

export const registerFailure = createAction(ActionTypes.REGISTER_FAILURE);

export const login = createAction(ActionTypes.LOGIN, props<{ user: User }>());

export const loginSuccess = createAction(ActionTypes.LOGIN_SUCCESS);

export const loginFailure = createAction(ActionTypes.LOGIN_FAILURE);

export const logout = createAction(ActionTypes.LOGOUT);
