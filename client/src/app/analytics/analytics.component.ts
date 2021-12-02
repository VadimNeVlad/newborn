import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Analytics } from '../shared/models/analytics';
import { getAnalytics } from '../store/analytic/analytic.actions';
import {
  selectAnalytic,
  selectAnalyticIsLoading,
} from '../store/analytic/analytic.selectors';
import { logout } from '../store/auth/auth.actions';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit {
  analytics$ = new Observable<Analytics | null>();
  isLoading$ = new Observable<boolean>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.analytics$ = this.store.select(selectAnalytic);
    this.isLoading$ = this.store.select(selectAnalyticIsLoading);

    this.getAnalytics();
  }

  getAnalytics(): void {
    this.store.dispatch(getAnalytics());
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
