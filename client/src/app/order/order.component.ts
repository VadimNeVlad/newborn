import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../store/auth/auth.actions';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  constructor(private store: Store) {}

  logout(): void {
    this.store.dispatch(logout());
  }
}
