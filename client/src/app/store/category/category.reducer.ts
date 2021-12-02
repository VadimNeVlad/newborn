import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as CategoryActions from './category.actions';
import { Category } from 'src/app/shared/models/category';

export interface CategoryState extends EntityState<Category> {
  loading: boolean;
  pending: boolean;
  currentCategoryId: string;
}

export const adapter: EntityAdapter<Category> = createEntityAdapter<Category>({
  selectId: (state) => state._id || '',
});

export const initialState: CategoryState = adapter.getInitialState({
  loading: false,
  pending: false,
  currentCategoryId: '',
});

export const categoryReducer = createReducer(
  initialState,
  on(CategoryActions.getCategories, (state) => ({
    ...state,
    loading: true,
  })),
  on(CategoryActions.getCategoriesSuccess, (state, { categories }) =>
    adapter.setAll(categories, {
      ...state,
      loading: false,
    })
  ),
  on(CategoryActions.getCategory, (state) => ({
    ...state,
    loading: true,
    currentCategoryId: '',
  })),
  on(CategoryActions.getCategorySuccess, (state, { category }) =>
    adapter.setOne(category, {
      ...state,
      loading: false,
      currentCategoryId: category._id || '',
    })
  ),
  on(CategoryActions.addCategory, CategoryActions.updateCategory, (state) => ({
    ...state,
    pending: true,
  })),
  on(CategoryActions.addCategorySuccess, (state, { category }) =>
    adapter.addOne(category, {
      ...state,
      pending: false,
    })
  ),
  on(CategoryActions.updateCategorySuccess, (state, action) =>
    adapter.updateOne(action.category, {
      ...state,
      pending: false,
    })
  ),
  on(CategoryActions.deleteCategory, (state, action) =>
    adapter.removeOne(action.id, {
      ...state,
      pending: true,
    })
  ),
  on(CategoryActions.deleteCategorySuccess, (state) => ({
    ...state,
    pending: false,
  }))
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const getCurrentCategoryId = (state: CategoryState) =>
  state.currentCategoryId;
export const isLoading = (state: CategoryState) => state.loading;
export const isPending = (state: CategoryState) => state.pending;
