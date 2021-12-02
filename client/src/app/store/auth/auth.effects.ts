import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {
  login,
  loginFailure,
  loginSuccess,
  logout,
  register,
  registerFailure,
  registerSuccess,
} from './auth.actions';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      switchMap(({ user }) => {
        return this.authService.login(user).pipe(
          map(({ token }) => {
            localStorage.setItem('nf', token);
            this.router.navigateByUrl('/overview');
            return loginSuccess();
          }),
          catchError(() => {
            this.toastr.error('Неправильный логин или пароль');
            return of(loginFailure());
          })
        );
      })
    );
  });

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(register),
      switchMap(({ user }) => {
        return this.authService.register(user).pipe(
          map(({ email }) => {
            this.router.navigateByUrl('/');
            this.toastr.success('Регистрация прошла успешно!');
            return registerSuccess({ currentUserEmail: email });
          }),
          catchError((err: HttpErrorResponse) => {
            this.toastr.error(err.error.message);
            return of(registerFailure());
          })
        );
      })
    );
  });

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logout),
        tap(() => {
          localStorage.clear();
          this.router.navigateByUrl('/');
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {}
}
