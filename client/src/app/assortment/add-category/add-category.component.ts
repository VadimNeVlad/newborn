import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { addCategory } from 'src/app/store/category/category.actions';
import { selectIsPending } from 'src/app/store/category/category.selectors';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  pending$ = new Observable<boolean>();

  categoryForm!: FormGroup;
  image!: File;
  imagePreview: ArrayBuffer | string | null | undefined = '';

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required]],
    });

    this.pending$ = this.store.select(selectIsPending);
  }

  getInputName(inputname: string): FormControl {
    return this.categoryForm.get(inputname) as FormControl;
  }

  onImageSelect(event: any): void {
    const file = event.target.files[0];
    this.image = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };

    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    this.store.dispatch(
      addCategory({ name: this.categoryForm.value.name, img: this.image })
    );
  }
}
