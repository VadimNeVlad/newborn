import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginSuccess } from './store/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    const token = localStorage.getItem('nf');

    if (token) {
      this.store.dispatch(loginSuccess());
    }
  }
}
