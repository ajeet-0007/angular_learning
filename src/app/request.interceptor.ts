import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    //sends request to the server
    // console.log('Request Interceptor', request)
    //interceptors add data to the every request made from the cient or server 
   
    if(request.method === "POST"){
       const newRequest = request.clone({
         headers: new HttpHeaders({
           token: '12345',
         }),
       });
       return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
