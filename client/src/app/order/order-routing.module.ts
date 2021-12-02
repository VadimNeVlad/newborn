import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { OrderComponent } from './order.component';

const routes: Routes = [
  {
    path: '',
    canLoad: [AuthGuard],
    component: OrderComponent,
    children: [
      {
        path: '',
        component: OrderViewComponent,
      },
      { path: ':id', component: AddOrderComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
