import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreate, ResponseCreate, ResponseUser } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<ResponseUser> {
    return this.http.get<ResponseUser>(this.url);
  }

  createUser(request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url, request);
  }
}
