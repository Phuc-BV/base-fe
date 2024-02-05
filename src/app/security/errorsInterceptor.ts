import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { TokenStorageService } from '../services/token-storage.service';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService, private router: Router, private tokenStorageService: TokenStorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.requestStarted();

        return this.handler(request, next);
    }
    handler(request: HttpRequest<any>, next: HttpHandler) {
        return next.handle(request).pipe(
            tap(
                (event) => {
                    if (event instanceof HttpErrorResponse) {
                        this.spinnerService.requestEnded();
                    }
                },
                (error: HttpErrorResponse) => {
                    this.spinnerService.resetSpinner();
                    if ([401, 403].indexOf(error.status) >= 0) {
                        this.tokenStorageService.removeItem();
                        this.tokenStorageService.returnLogin();
                    }
                    throw error;
                }
            )
        );
    }
}
