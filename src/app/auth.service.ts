import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  login(email: string, password: string): Observable<boolean> {
    const isLoggedIn =( email == 'service@topinvest.fr' && password == "animeo");
    console.log('🏞🎆🏂 ~ AuthService ~ isLoggedIn => ', isLoggedIn);

    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  logout() {
    console.log('🏞🎆🏂 ~ AuthService ~ this.isLoggedIn => ', this.isLoggedIn);
    this.isLoggedIn = false;
  }
}
