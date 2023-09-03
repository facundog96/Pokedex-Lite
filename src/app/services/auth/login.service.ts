import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { User, UserLogin } from 'src/app/shared/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  currentUserLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>(
    {} as User
  );

  constructor(private http: HttpClient) {}

  login(credentials: UserLogin): Observable<User> {
    return this.http.get<User>('././assets/data.json').pipe(
      tap((userData: User) => {
        this.currentUserData.next(userData);
        this.currentUserLogged.next(true);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        'Backend returned code ',
        error.status,
        ' body was: ',
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  get userData(): Observable<User> {
    return this.currentUserData.asObservable();
  }
  get userLogged(): Observable<boolean> {
    return this.currentUserLogged.asObservable();
  }
  logout() {
    this.currentUserLogged.next(false);
  }
}
