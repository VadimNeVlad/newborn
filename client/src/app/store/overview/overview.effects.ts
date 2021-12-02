import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { OverviewService } from 'src/app/shared/services/overview.service';

import { getOverview, getOverviewSuccess } from './overview.actions';

@Injectable()
export class OverviewEffects {
  getOverview$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getOverview),
      switchMap(() => {
        return this.overviewService
          .getOverview()
          .pipe(map((overview) => getOverviewSuccess({ overview })));
      })
    );
  });

  constructor(
    private actions$: Actions,
    private overviewService: OverviewService
  ) {}
}
