import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-overview-note',
  templateUrl: './overview-note.component.html',
  styleUrls: ['./overview-note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewNoteComponent {
  @Input() noteStatus = false;

  constructor() {}
}
