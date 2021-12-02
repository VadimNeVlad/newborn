import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Overview } from '../models/overview';

@Injectable({
  providedIn: 'root',
})
export class OverviewService {
  constructor(private http: HttpClient) {}

  getOverview(): Observable<Overview> {
    return this.http.get<Overview>(
      `${environment.apiUrl}/api/analytics/overview`
    );
  }
}
