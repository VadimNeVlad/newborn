import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../store/auth/auth.actions';

@Component({
  selector: 'app-assortment',
  templateUrl: './assortment.component.html',
  styleUrls: ['./assortment.component.scss'],
})
export class AssortmentComponent {
  constructor(private store: Store) {}

  logout(): void {
    this.store.dispatch(logout());
  }
}
