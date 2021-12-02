import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { selectIsSubmiting } from 'src/app/store/auth/auth.selectors';
import { register } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-signed-up',
  templateUrl: './signed-up.component.html',
  styleUrls: ['./signed-up.component.scss'],
})
export class SignedUpComponent implements OnInit {
  authForm!: FormGroup;
  pending$ = this.store.select(selectIsSubmiting);

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  getInputName(inputname: string): FormControl {
    return this.authForm.get(inputname) as FormControl;
  }

  onSubmit(): void {
    const data = {
      user: this.authForm.value,
    };

    this.store.dispatch(register(data));
  }
}
