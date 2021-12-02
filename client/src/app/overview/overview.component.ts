import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';

import { Overview } from '../shared/models/overview';
import { logout } from '../store/auth/auth.actions';
import { getOverview } from '../store/overview/overview.actions';
import {
  selectOverview,
  selectOverviewIsLoading,
} from '../store/overview/overview.selectors';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  overview$ = new Observable<Overview | null>();
  isLoading$ = new Observable<boolean>();

  yesterdayDate = '';
  noteStatus = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.overview$ = this.store.select(selectOverview);
    this.isLoading$ = this.store.select(selectOverviewIsLoading);
    this.yesterdayDate = moment().add(-1, 'd').format('DD.MM.YYYY');

    this.getOverview();
  }

  getOverview(): void {
    this.store.dispatch(getOverview());
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
