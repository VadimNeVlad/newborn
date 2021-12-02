import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Analytics } from '../models/analytics';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor(private http: HttpClient) {}

  getAnalytics(): Observable<Analytics> {
    return this.http.get<Analytics>(
      `${environment.apiUrl}/api/analytics/analytics`
    );
  }
}
