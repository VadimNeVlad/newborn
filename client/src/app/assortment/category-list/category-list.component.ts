import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent {
  @Input() categories: Category[] = [];

  constructor() {}

  trackById(idx: number, category: Category): string {
    return category._id || '';
  }
}
