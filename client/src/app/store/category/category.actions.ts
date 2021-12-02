import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Category } from 'src/app/shared/models/category';

export const getCategories = createAction('[Category] Get Categories');

export const getCategoriesSuccess = createAction(
  '[Category] Get Categories Success',
  props<{ categories: Category[] }>()
);

export const getCategory = createAction(
  '[Category] Get Category',
  props<{ slug: string }>()
);

export const getCategorySuccess = createAction(
  '[Category] Get Category Success',
  props<{ category: Category }>()
);

export const addCategory = createAction(
  '[Category] Add Category',
  props<{ name: string; img: File }>()
);

export const addCategorySuccess = createAction(
  '[Category] Add Category Success',
  props<{ category: Category }>()
);

export const updateCategory = createAction(
  '[Category] Update Category',
  props<{ name: string; id: string; img: File }>()
);

export const updateCategorySuccess = createAction(
  '[Category] Update Category Success',
  props<{ category: Update<Category> }>()
);

export const deleteCategory = createAction(
  '[Category] Delete Category',
  props<{ id: string }>()
);

export const deleteCategorySuccess = createAction(
  '[Category] Delete Category Success'
);
