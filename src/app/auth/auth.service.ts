import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { User } from './user';
import { AuthResponse } from './auth-response';


@Injectable({
  providedIn: 'root' // makes it a singleton
})
export class AuthService {
  AUTH_SERVER_ADDRESS  =  'https://rca2f8gm8a.execute-api.us-east-1.amazonaws.com/dev';

  constructor(private  httpClient: HttpClient, private  storage: Storage) { }

  signup(user: User): Observable<AuthResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/signup`, JSON.stringify(user)).pipe(
      // tslint:disable-next-line:no-string-literal
      tap(async (res: AuthResponse ) => {
        return res;
      })
    );
  }

}
