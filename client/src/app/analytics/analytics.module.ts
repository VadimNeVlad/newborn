import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { SharedModule } from '../shared/shared.module';
import { AnalyticsViewComponent } from './analytics-view/analytics-view.component';
import { EffectsModule } from '@ngrx/effects';
import { AnalyticEffects } from '../store/analytic/analytic.effects';

@NgModule({
  declarations: [AnalyticsComponent, AnalyticsViewComponent],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    SharedModule,
    EffectsModule.forFeature([AnalyticEffects]),
  ],
})
export class AnalyticsModule {}
