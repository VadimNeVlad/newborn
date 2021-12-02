import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category';
import { getCategories } from 'src/app/store/category/category.actions';
import {
  selectCategory,
  selectIsLoading,
} from 'src/app/store/category/category.selectors';

@Component({
  selector: 'app-categories-view',
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.scss'],
})
export class CategoriesViewComponent implements OnInit {
  categories$ = new Observable<Category[]>();
  loading$ = new Observable<boolean>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.categories$ = this.store.select(selectCategory);
    this.loading$ = this.store.select(selectIsLoading);

    this.getCategories();
  }

  getCategories(): void {
    this.store.dispatch(getCategories());
  }
}
