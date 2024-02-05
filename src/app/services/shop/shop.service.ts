import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class ShopService {

    constructor(private http: HttpClient) { }

    getListDeal(shopId: any, type: any, pageNo: any, pageSize: any): Observable<any> {
        return this.http.get(environment.apiUrl + 'api/shop/get-list-deal?shopId=' + shopId + '&type=' + type + '&pageNo=' + pageNo + '&pageSize=' + pageSize,
            { headers: environment.httpOptions.headers });
    }
}