import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

interface AuthResponse {
  email: string;
  localId: string;
  idToken: string;
  expiresIn: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authData = localStorage.getItem('userData');
  authenticatedUser = new BehaviorSubject(
    this.authData ? JSON.parse(this.authData) : null
  );
  loginUri =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<AuthResponse>(this.loginUri + environment.development.accessToken, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          this.handleAuth(
            res.email,
            res.localId,
            res.idToken,
            Number(res.expiresIn)
          );
        })
      );
  }

  handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expSeconds = new Date(new Date().getTime() + expiresIn * 1000);
    const formUser = new User(email, userId, token, expSeconds);
    this.authenticatedUser.next(formUser);
    localStorage.setItem('userData', JSON.stringify(formUser));
  }
}
