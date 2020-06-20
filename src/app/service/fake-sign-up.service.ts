import { Injectable } from '@angular/core';
import {Account} from '../model/account';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeSignUpService {
  // private static handleError(error: Response | any) {
  //   // In a real world app, you might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     if (error.status === 404) {
  //       errMsg = `Resource ${error.url} was not found`;
  //     } else {
  //       const body = error.json() || '';
  //       const err = body.error || JSON.stringify(body);
  //       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //     }
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //
  //   return Observable.throw(errMsg);
  // }

  constructor(private http: HttpClient) { }

  createAccount(account: Account): Observable<Account> {
    return this.http.post<Account>('/users/register', account);
      //  .map(response => response.json() as Account)
      // .catch(FakeSignUpService.handleError);
  }
}
