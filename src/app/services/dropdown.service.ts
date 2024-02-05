import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class DropdownService {
    private baseUrl = "api/web/dropdown/";
    constructor(private http: HttpClient) { }

    getDropDownEn(): Observable<any> {
        return this.http.get('../../assets/i18n/dropdown/dropdown-en.json');
    }

    getDropDownVi(): Observable<any> {
        return this.http.get('../../assets/i18n/dropdown/dropdown-vi.json');
    }

    dropDowProvinceCode(): Observable<any> {
        return this.http.get(environment.apiUrl + this.baseUrl + 'provinces', environment.httpOptions);
    }

    dropDowDistrictCode(): Observable<any> {
        return this.http.get(environment.apiUrl + this.baseUrl + 'districCodes', environment.httpOptions)
    }
}