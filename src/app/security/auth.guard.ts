import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { TranslateModule } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private tokenStorageService: TokenStorageService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // const currentUser = this.tokenStorageService.getToken();
        // if (currentUser) {
        //     return true;
        // }
        // this.router.parseUrl('/login');
        // return true;
        return true;
    }
}
