import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  // request modification 
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Request is intercepted on its way', req);
    // if (req.url.indexOf('auth') > -1) {}
    const modifiedRequest = req.clone({headers: req.headers.append('Auth','zzz')}) // for all outgoing requests
    return next.handle(modifiedRequest);
  }
  
  // // response modification 
  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   console.log('Request is intercepted on its way', req);
  //   return next.handle(req).pipe(
  //     tap(event => {
  //       console.log(event);
  //       if (event.type === HttpEventType.Response) {
  //         console.log('Res bpdy is', event.body);
  //       }
  //     })
  //   );
  // }
}
