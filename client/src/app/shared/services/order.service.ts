import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  limit = 10;
  offset = 0;
  step = 10;

  constructor(private http: HttpClient) {}

  getOrders(params: any = {}): Observable<Order[]> {
    const options = {
      params: new HttpParams({ fromObject: params }),
    };

    return this.http.get<Order[]>(`${environment.apiUrl}/api/order`, options);
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${environment.apiUrl}/api/order`, order);
  }
}
