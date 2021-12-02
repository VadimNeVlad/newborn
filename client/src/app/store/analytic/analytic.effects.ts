import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { AnalyticsService } from 'src/app/shared/services/analytics.service';
import { getAnalytics, getAnalyticsSuccess } from './analytic.actions';

@Injectable()
export class AnalyticEffects {
  getAnalytic$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getAnalytics),
      switchMap(() => {
        return this.analyticsService
          .getAnalytics()
          .pipe(map((analytic) => getAnalyticsSuccess({ analytic })));
      })
    );
  });

  constructor(
    private actions$: Actions,
    private analyticsService: AnalyticsService
  ) {}
}
