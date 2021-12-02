import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/api/category`);
  }

  getCategory(id: string): Observable<Category> {
    return this.http.get<Category>(`${environment.apiUrl}/api/category/${id}`);
  }

  addCategory(name: string, img?: File): Observable<Category> {
    const fd = new FormData();

    if (img) {
      fd.append('image', img, img.name);
    }
    fd.append('name', name);

    return this.http.post<Category>(`${environment.apiUrl}/api/category`, fd);
  }

  updateCategory(name: string, id?: string, img?: File): Observable<Category> {
    const fd = new FormData();

    if (img) {
      fd.append('image', img, img.name);
    }
    fd.append('name', name);

    return this.http.patch<Category>(
      `${environment.apiUrl}/api/category/${id}`,
      fd
    );
  }

  deleteCategory(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${environment.apiUrl}/api/category/${id}`
    );
  }
}
