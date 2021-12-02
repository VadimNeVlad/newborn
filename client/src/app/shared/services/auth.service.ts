import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: User): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(
      `${environment.apiUrl}/api/auth/login`,
      user
    );
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(
      `${environment.apiUrl}/api/auth/register`,
      user
    );
  }
}
