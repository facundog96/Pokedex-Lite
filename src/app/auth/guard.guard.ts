import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/auth/login.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.loginService.userLogged.pipe(
      take(1), // Toma el primer valor y completa el observable
      map((isLogged: boolean) => {
        if (isLogged) {
          return true; // El usuario está autenticado
        } else {
          this.router.navigate(['/login']);
          return false; // El usuario no está autenticado
        }
      })
    );
  }
}
