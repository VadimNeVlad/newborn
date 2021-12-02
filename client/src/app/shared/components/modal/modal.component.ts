import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { modalClose } from 'src/app/store/modal/modal.actions';
import { selectModalOpenType } from 'src/app/store/modal/modal.selectors';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {
  @Input() modalType = '';
  @Input() currentModal: string | null = null;
  @Input() title = '';
  @Input() text = '';
  @Input() cartModal = false;

  modalStatus$ = new Observable<string>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.modalStatus$ = this.store.select(selectModalOpenType);
  }

  onClose(): void {
    this.store.dispatch(modalClose());
  }
}
