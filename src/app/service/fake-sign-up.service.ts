import { Injectable } from '@angular/core';
import {Account} from '../model/account';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeSignUpService {
  constructor(private http: HttpClient) { }
  createAccount(account: Account): Observable<Account> {
    return this.http.post<Account>('/users/register', account);
  }
}
