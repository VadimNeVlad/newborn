import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { AssortmentRoutingModule } from './assortment-routing.module';
import { AssortmentComponent } from './assortment.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { PositionListComponent } from './position-list/position-list.component';
import { PositionsEffects } from '../store/position/position.effects';
import { AddPositionComponent } from './add-position/add-position.component';
import { EditPositionComponent } from './edit-position/edit-position.component';
import { CategoryEffects } from '../store/category/category.effects';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoriesViewComponent } from './categories-view/categories-view.component';
import { PositionsViewComponent } from './positions-view/positions-view.component';

@NgModule({
  declarations: [
    AssortmentComponent,
    CategoryListComponent,
    EditCategoryComponent,
    PositionListComponent,
    AddPositionComponent,
    EditPositionComponent,
    AddCategoryComponent,
    CategoriesViewComponent,
    PositionsViewComponent,
  ],
  imports: [
    CommonModule,
    AssortmentRoutingModule,
    SharedModule,
    EffectsModule.forFeature([CategoryEffects, PositionsEffects]),
    ReactiveFormsModule,
  ],
})
export class AssortmentModule {}
