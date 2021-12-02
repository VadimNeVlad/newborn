import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Position } from '../models/position';

@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  constructor(private http: HttpClient) {}

  getPositions(categoryId: string): Observable<Position[]> {
    return this.http.get<Position[]>(
      `${environment.apiUrl}/api/position/${categoryId}`
    );
  }

  addPosition(position: Position): Observable<Position> {
    return this.http.post<Position>(
      `${environment.apiUrl}/api/position`,
      position
    );
  }

  deletePosition(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${environment.apiUrl}/api/position/${id}`
    );
  }

  updatePosition(position: Position): Observable<Position> {
    return this.http.patch<Position>(
      `${environment.apiUrl}/api/position/${position._id}`,
      position
    );
  }
}
