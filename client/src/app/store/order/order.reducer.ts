import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as OrderActions from './order.actions';
import { Order } from 'src/app/shared/models/order';

export interface OrderState extends EntityState<Order> {
  pending: boolean;
  loading: boolean;
  isLastOrders: boolean;
}

export const adapter: EntityAdapter<Order> = createEntityAdapter<Order>({
  selectId: (state) => state._id || '',
  sortComparer: (a: Order, b: Order): any => a.order! < b.order!,
});

export const initialState: OrderState = adapter.getInitialState({
  pending: false,
  loading: false,
  isLastOrders: false,
});

export const orderReducer = createReducer(
  initialState,
  on(OrderActions.getOrders, (state) => ({
    ...state,
    loading: true,
  })),
  on(OrderActions.getOrdersSuccess, (state, { orders }) =>
    adapter.addMany(orders, {
      ...state,
      loading: false,
    })
  ),
  on(OrderActions.addOrder, OrderActions.loadMoreOrders, (state) => ({
    ...state,
    pending: true,
  })),
  on(OrderActions.addOrderSuccess, (state, { order }) =>
    adapter.addOne(order, {
      ...state,
      pending: false,
    })
  ),
  on(OrderActions.noOrdersLeft, (state) => ({
    ...state,
    isLastOrders: true,
    loading: false,
  })),
  on(OrderActions.loadMoreOrdersSuccess, (state, { orders }) =>
    adapter.addMany(orders, {
      ...state,
      pending: false,
    })
  ),
  on(OrderActions.searchOrders, (state) => ({
    ...state,
    loading: true,
    isLastOrders: false,
  })),
  on(OrderActions.searchOrdersSuccess, (state, { orders }) =>
    adapter.setAll(orders, {
      ...state,
      loading: false,
    })
  ),
  on(OrderActions.clearOrders, (state) =>
    adapter.removeAll({
      ...state,
      isLastOrders: false,
    })
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
