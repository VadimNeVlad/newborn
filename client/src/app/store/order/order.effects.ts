import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { map, switchMap, tap } from 'rxjs/operators';
import { OrderListBuilderService } from 'src/app/shared/services/order-list-builder.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { modalClose } from '../modal/modal.actions';
import {
  addOrder,
  addOrderSuccess,
  clearOrders,
  getOrders,
  getOrdersSuccess,
  loadMoreOrders,
  loadMoreOrdersSuccess,
  noOrdersLeft,
  searchOrders,
  searchOrdersSuccess,
} from './order.actions';

@Injectable()
export class OrderEffects {
  getOrders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getOrders),
      switchMap(({ params }) => {
        return this.orderService
          .getOrders(params)
          .pipe(map((orders) => getOrdersSuccess({ orders })));
      })
    );
  });

  searchOrders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchOrders),
      switchMap(({ params }) => {
        return this.orderService.getOrders(params).pipe(
          map((orders) => {
            if (orders.length < this.orderService.step) {
              this.store.dispatch(noOrdersLeft());
            }

            return searchOrdersSuccess({ orders });
          })
        );
      })
    );
  });

  loadMoreOrders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadMoreOrders),
      switchMap(({ params }) => {
        return this.orderService.getOrders(params).pipe(
          map((orders) => {
            if (orders.length < this.orderService.step) {
              this.store.dispatch(noOrdersLeft());
            }

            return loadMoreOrdersSuccess({ orders });
          })
        );
      })
    );
  });

  addOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addOrder),
      switchMap(({ order }) => {
        return this.orderService.addOrder(order).pipe(
          map((order) => {
            this.toastr.success('Заказ успешно добавлен');
            this.store.dispatch(modalClose());
            this.router.navigateByUrl('order');
            this.orderBuilderService.clearItems();

            return addOrderSuccess({ order });
          })
        );
      })
    );
  });

  clearOrders$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(clearOrders),
        tap(() => {
          this.orderService.offset = 0;
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private toastr: ToastrService,
    private router: Router,
    private store: Store,
    private orderBuilderService: OrderListBuilderService
  ) {}
}
