import {
  AfterContentChecked,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { MaterialService } from 'src/app/shared/services/material.service';
import {
  selectCurrentUserEmail,
  selectIsSubmiting,
} from 'src/app/store/auth/auth.selectors';
import { login } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-signed-in',
  templateUrl: './signed-in.component.html',
  styleUrls: ['./signed-in.component.scss'],
})
export class SignedInComponent
  implements OnInit, AfterContentChecked, OnDestroy
{
  authForm!: FormGroup;
  pending$ = this.store.select(selectIsSubmiting);
  currentUserEmail = '';
  subs = new Subscription();

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngAfterContentChecked() {
    this.getCurrentUserEmail();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getInputName(inputname: string): FormControl {
    return this.authForm.get(inputname) as FormControl;
  }

  getCurrentUserEmail() {
    this.subs = this.store
      .select(selectCurrentUserEmail)
      .subscribe((email) => (this.currentUserEmail = email));

    if (this.currentUserEmail) {
      this.authForm.patchValue({
        email: this.currentUserEmail,
      });

      MaterialService.updateTextInput();
    }
  }

  onSubmit(): void {
    const data = {
      user: this.authForm.value,
    };

    this.store.dispatch(login(data));
  }
}
