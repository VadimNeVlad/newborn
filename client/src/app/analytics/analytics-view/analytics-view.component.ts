import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Analytics } from 'src/app/shared/models/analytics';

@Component({
  selector: 'app-analytics-view',
  templateUrl: './analytics-view.component.html',
  styleUrls: ['./analytics-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalyticsViewComponent {
  @Input() analytics!: Analytics;

  constructor() {}
}
