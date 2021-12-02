import { createAction, props } from '@ngrx/store';
import { Order } from 'src/app/shared/models/order';

export const addOrder = createAction(
  '[Order] Add Order',
  props<{ order: Order }>()
);

export const addOrderSuccess = createAction(
  '[Order] Add Order Success',
  props<{ order: Order }>()
);

export const getOrders = createAction(
  '[Order] Get Orders',
  props<{ params: any }>()
);

export const getOrdersSuccess = createAction(
  '[Order] Get Orders Success',
  props<{ orders: Order[] }>()
);

export const loadMoreOrders = createAction(
  '[Order] Load More Orders',
  props<{ params: any }>()
);

export const loadMoreOrdersSuccess = createAction(
  '[Order] Load More Orders Success',
  props<{ orders: Order[] }>()
);

export const searchOrders = createAction(
  '[Order] Search Orders',
  props<{ params: any }>()
);

export const searchOrdersSuccess = createAction(
  '[Order] Search Orders Success',
  props<{ orders: Order[] }>()
);

export const noOrdersLeft = createAction('[Order] No Orders Left');

export const clearOrders = createAction('[Order] Clear Orders');
