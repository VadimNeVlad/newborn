import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCategory from './category.reducer';

export const selectCategoryFeature =
  createFeatureSelector<fromCategory.CategoryState>('category');

export const selectCategory = createSelector(
  selectCategoryFeature,
  fromCategory.selectAll
);

export const selectCategoryEntities = createSelector(
  selectCategoryFeature,
  fromCategory.selectEntities
);

export const selectCurrentCategoryId = createSelector(
  selectCategoryFeature,
  fromCategory.getCurrentCategoryId
);

export const selectCurrentCategory = createSelector(
  selectCategoryEntities,
  selectCurrentCategoryId,
  (categoriesEntities, categoryId) => categoriesEntities[categoryId]
);

export const selectIsLoading = createSelector(
  selectCategoryFeature,
  (state) => state.loading
);

export const selectIsPending = createSelector(
  selectCategoryFeature,
  (state) => state.pending
);
