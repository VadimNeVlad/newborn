import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AssortmentComponent } from './assortment.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoriesViewComponent } from './categories-view/categories-view.component';

const routes: Routes = [
  {
    path: '',
    canLoad: [AuthGuard],
    component: AssortmentComponent,
    children: [
      {
        path: '',
        component: CategoriesViewComponent,
      },
      {
        path: 'category',
        component: AddCategoryComponent,
      },
      {
        path: 'category/:id',
        component: EditCategoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssortmentRoutingModule {}
