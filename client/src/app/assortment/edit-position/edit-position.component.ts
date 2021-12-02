import { Component, Input, OnInit } from '@angular/core';
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
import { MaterialService } from 'src/app/shared/services/material.service';
import { modalClose, modalOpen } from 'src/app/store/modal/modal.actions';
import { selectModalOpenType } from 'src/app/store/modal/modal.selectors';
import { updatePosition } from 'src/app/store/position/position.actions';
import { selectPositionIsPending } from 'src/app/store/position/position.selectors';

@Component({
  selector: 'app-edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: ['./edit-position.component.scss'],
})
export class EditPositionComponent implements OnInit {
  @Input() positionId = '';
  @Input() position!: Position;

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

    this.getPositionValues();
  }

  getPositionValues(): void {
    this.positionForm.patchValue({
      name: this.position.name,
      cost: this.position.cost,
    });

    MaterialService.updateTextInput();
  }

  openModal(modalType: string): void {
    this.store.dispatch(modalOpen({ modalOpen: modalType }));
    MaterialService.updateTextInput();
  }

  closeModal(): void {
    this.store.dispatch(modalClose());
  }

  getInputName(inputname: string): FormControl {
    return this.positionForm.get(inputname) as FormControl;
  }

  onSubmit(): void {
    const position: Position = {
      _id: this.positionId,
      name: this.positionForm.value.name,
      cost: this.positionForm.value.cost,
      category: this.categoryId,
    };

    this.store.dispatch(updatePosition({ position }));
  }
}
