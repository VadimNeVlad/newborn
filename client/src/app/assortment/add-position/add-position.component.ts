import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Position } from 'src/app/shared/models/position';
import { modalClose, modalOpen } from 'src/app/store/modal/modal.actions';
import { selectModalOpenType } from 'src/app/store/modal/modal.selectors';
import { addPosition } from 'src/app/store/position/position.actions';
import { selectPositionIsPending } from 'src/app/store/position/position.selectors';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.scss'],
})
export class AddPositionComponent implements OnInit {
  modalOpenType$ = new Observable<string>();
  isPending$ = new Observable<boolean>();

  positionForm!: FormGroup;
  categoryId = '';

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.positionForm = this.fb.group({
      name: ['', [Validators.required]],
      cost: ['', [Validators.required, Validators.min(1)]],
    });

    this.isPending$ = this.store.select(selectPositionIsPending);
    this.modalOpenType$ = this.store.select(selectModalOpenType);
    this.categoryId = this.route.snapshot.paramMap.get('id') || '';
  }

  openModal(modalType: string): void {
    this.store.dispatch(modalOpen({ modalOpen: modalType }));
  }

  closeModal(): void {
    this.store.dispatch(modalClose());
  }

  getInputName(inputname: string): FormControl {
    return this.positionForm.get(inputname) as FormControl;
  }

  onSubmit(): void {
    const position: Position = {
      name: this.positionForm.value.name,
      cost: this.positionForm.value.cost,
      category: this.categoryId,
    };

    this.store.dispatch(addPosition({ position }));
    this.positionForm.reset();
  }
}
