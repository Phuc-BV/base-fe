import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from 'src/app/dto/request/security/login.request.component';
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    login(loginRequest: LoginRequest): Observable<any> {
        return this.http.post(environment.apiUrl + 'api/login', loginRequest, { headers: environment.httpOptions.headers });
    }

    logout(strToken: any): Observable<any> {
        let token: any = {};
        token['token'] = strToken;
        return this.http.post(environment.apiUrl + 'api/auth/logout', token);
    }
}