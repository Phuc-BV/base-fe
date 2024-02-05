import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/internal/operators/delay';
import { SpinnerService } from './spinner.service';
import { AuthService } from './security/login.service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_NAME = 'user';
const REMEMBER_USER = "re";
const LANGUAGE = 'la';
const DISTRICT = 'di';
const PROVINCE = 'pr';
@Injectable({
    providedIn: 'root',
})
export class TokenStorageService {
    sub = new EventEmitter();

    constructor(
        private authService: AuthService,
        private router: Router,
        private spinnerService: SpinnerService
    ) { }
    signOut(): void {
        let token = this.getToken();
        this.authService.logout(token).pipe(delay(500)).subscribe((data) => {
            this.spinnerService.resetSpinner();
            this.removeItem();
            this.returnLogin();
        },
            (err) => {
                this.removeItem();
                this.returnLogin();
            }
        );
    }

    public saveToken(token: string): void {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    }

    public saveUserName(userName: any): void {
        window.localStorage.removeItem(USER_NAME);
        window.localStorage.setItem(USER_NAME, userName);
    }

    public saveRememberMe(object: any): void {
        const objectString = JSON.stringify(object);
        window.localStorage.removeItem(REMEMBER_USER);
        window.localStorage.setItem(REMEMBER_USER, objectString);
    }

    public saveDistrict(object: any): void {
        const objectString = JSON.stringify(object);
        window.localStorage.removeItem(DISTRICT);
        window.localStorage.setItem(DISTRICT, objectString);
    }

    public saveProvince(object: any): void {
        const objectString = JSON.stringify(object);
        window.localStorage.removeItem(PROVINCE);
        window.localStorage.setItem(PROVINCE, objectString);
    }

    public getUserName(): string | null {
        return window.localStorage.getItem(USER_NAME);
    }

    public getToken(): string | null {
        return window.localStorage.getItem(TOKEN_KEY);
    }

    public getUser(): any {
        const user = window.localStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }

    public getRememberMe(): any {
        const user = window.localStorage.getItem(REMEMBER_USER);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }

    public getDistrict(): any {
        const district = window.localStorage.getItem(DISTRICT);
        if (district) {
            return JSON.parse(district);
        }
        return {};
    }

    public getProvince(): any {
        const province = window.localStorage.getItem(PROVINCE);
        if (province) {
            return JSON.parse(province);
        }
        return {};
    }

    public clearAll() {
        window.localStorage.clear();
    }

    public removeItem() {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.removeItem(USER_KEY);
        window.localStorage.removeItem(USER_NAME);
    }

    returnLogin() {
        this.router.navigate(['/login']);
    }

    public setLanguage(language: string): any {
        window.localStorage.removeItem(LANGUAGE);
        window.localStorage.setItem(LANGUAGE, language);
    }

    public getLanguage(): any {
        const language = window.localStorage.getItem(LANGUAGE);
        if (language) {
            return language;
        }
        return null;
    }

    public setLanguageDropdown(data: any) {
        this.sub.emit(data);
    }
}
