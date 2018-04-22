
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        let authReq;
        const userStorage = localStorage.getItem('user');
        if (userStorage !== 'undefined') {
            const token = JSON.parse(localStorage.getItem('user')).token;

            authReq = req.clone({
                headers: req.headers.set('Authorization',
                    `Bearer ${token}`)
            });
        } else {
            authReq = req.clone();
        }

        return next.handle(authReq)
            .catch((error, caught) => {
                console.log(error);
                return Observable.throw(error);
            }) as any;
    }
}
