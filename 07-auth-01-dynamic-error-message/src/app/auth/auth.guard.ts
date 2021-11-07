import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  // // previous approach 
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   router: RouterStateSnapshot
  // ): boolean | Promise<boolean> | Observable<boolean> {
  //   return this.authService.user.pipe(
  //     take(1),
  //     map(user => {
  //       const isAuth = !!user;
  //       return isAuth
  //     }),
  //     tap(isAuth => {
  //       if (isAuth) return true;
  //       else this.router.navigate(['/auth']);
  //     })

  //     // in one operator
  //     // map(user => {
  //     //   const isAuth = !!user;
  //     //   if (isAuth) return true;
  //     //   else this.router.navigate(['/auth']);
  //     // }),
  //   );
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      take(1),
      map(user => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/auth']);
      })
    );
  }
}
