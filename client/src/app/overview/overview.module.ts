import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { SharedModule } from '../shared/shared.module';
import { OverviewViewComponent } from './overview-view/overview-view.component';
import { OverviewNoteComponent } from './overview-note/overview-note.component';
import { EffectsModule } from '@ngrx/effects';
import { AnalyticEffects } from '../store/analytic/analytic.effects';
import { OverviewEffects } from '../store/overview/overview.effects';

@NgModule({
  declarations: [
    OverviewComponent,
    OverviewViewComponent,
    OverviewNoteComponent,
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    SharedModule,
    EffectsModule.forFeature([OverviewEffects]),
  ],
})
export class OverviewModule {}
