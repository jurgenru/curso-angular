import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('REQUESTTTTTTT: ', request);

    console.log('TOKEN: ', localStorage.getItem('auth'));

    const token = localStorage.getItem('auth');

    if (token) {
      request = request.clone({
        url: `${request.url}`,
      });
    }

    /*    if (token) {
          request = request.clone({
            setHeaders: {
              Authorization: 'Bearer ' + token
            }
          });
        }*/

    return next.handle(request);
  }
}
