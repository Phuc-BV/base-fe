import { EventEmitter, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { SpinnerService } from './spinner.service';
import { ValidatorCommon } from '../common/validator.common';
import { LANGUAGE } from '../common/constants';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    private selectedLanguageSubject: BehaviorSubject<string> = new BehaviorSubject<string>(LANGUAGE.VI);
    public selectedLanguage$ = this.selectedLanguageSubject.asObservable();
    sub = new EventEmitter();

    constructor(private translateService: TranslateService, private tokenStorage: TokenStorageService, private spinnerService: SpinnerService) {
        let language = this.tokenStorage.getLanguage();
        if (ValidatorCommon.checkIsNullEmptyUndefined(language)) {
            this.selectedLanguageSubject.next(language);
        } else {
            this.selectedLanguageSubject.next(LANGUAGE.VI);
        }
    }

    setLanguage(lang: string) {
        this.translateService.use(lang);
        this.selectedLanguageSubject.next(lang);
        this.tokenStorage.setLanguage(lang);
    }

    public setLanguageDropdown(data: any) {
        this.sub.emit(data);
    }
}
