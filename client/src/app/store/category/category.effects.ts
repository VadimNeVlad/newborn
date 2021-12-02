import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { ToastrService } from 'ngx-toastr';
import { map, switchMap } from 'rxjs/operators';
import { Category } from 'src/app/shared/models/category';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import {
  addCategory,
  addCategorySuccess,
  deleteCategory,
  deleteCategorySuccess,
  getCategories,
  getCategoriesSuccess,
  getCategory,
  getCategorySuccess,
  updateCategory,
  updateCategorySuccess,
} from './category.actions';

@Injectable()
export class CategoryEffects {
  getCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCategories),
      switchMap(() => {
        return this.categoriesService
          .getCategories()
          .pipe(map((categories) => getCategoriesSuccess({ categories })));
      })
    );
  });

  getCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCategory),
      switchMap(({ slug }) => {
        return this.categoriesService
          .getCategory(slug)
          .pipe(map((category) => getCategorySuccess({ category })));
      })
    );
  });

  addCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addCategory),
      switchMap(({ name, img }) => {
        return this.categoriesService.addCategory(name, img).pipe(
          map((category) => {
            this.toastr.success('Категория Добавлена');
            this.router.navigateByUrl('/assortment');
            return addCategorySuccess({ category });
          })
        );
      })
    );
  });

  updateCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateCategory),
      switchMap(({ name, id, img }) => {
        return this.categoriesService.updateCategory(name, id, img).pipe(
          map((category) => {
            const update: Update<Category> = {
              id: category._id || '',
              changes: category,
            };

            this.toastr.success('Категория Изменена');
            this.router.navigateByUrl('/assortment');
            return updateCategorySuccess({ category: update });
          })
        );
      })
    );
  });

  deleteCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteCategory),
      switchMap(({ id }) => {
        return this.categoriesService.deleteCategory(id).pipe(
          map(() => {
            this.toastr.success('Категория Удалена');
            this.router.navigateByUrl('/assortment');
            return deleteCategorySuccess();
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService,
    private toastr: ToastrService,
    private router: Router
  ) {}
}
