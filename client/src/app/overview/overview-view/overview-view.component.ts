import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Overview } from 'src/app/shared/models/overview';

@Component({
  selector: 'app-overview-view',
  templateUrl: './overview-view.component.html',
  styleUrls: ['./overview-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewViewComponent {
  @Input() overview!: Overview;

  constructor() {}
}
