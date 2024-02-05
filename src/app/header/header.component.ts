import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { SpinnerService } from '../services/spinner.service';
import { ValidatorCommon } from '../common/validator.common';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isShowToggle = true;
  @Output() changeEmitter = new EventEmitter();
  @Output() changeIconCloseEmitter = new EventEmitter();
  public userName: string | null = "";
  public code: string = "";
  public languages: any[] = [];
  constructor(private tokenStorage: TokenStorageService, private translate: TranslateService, private languageService: LanguageService
  ) {
  }
  ngOnInit(): void {
    this.userName = this.tokenStorage.getUserName() == null ? "" : this.tokenStorage.getUserName();
    let language = this.tokenStorage.getLanguage();

    if (ValidatorCommon.checkIsNullEmptyUndefined(language)) {
      if (this.translate.use(language.match(/en|vi/))) {
        this.code = language;
      } else {
        this.code = 'en';
      }
      this.translate.use(this.code);
    } else {
      this.defaultLang();
    }
  }

  defaultLang() {
    this.translate.addLangs(['en', 'vi']);
    this.translate.setDefaultLang('en');
    let browserLang: any = this.translate.currentLang;
    if (browserLang === undefined) {
      browserLang = 'vi';
    }
    this.tokenStorage.setLanguage(browserLang);
    this.code = browserLang;
    this.translate.use(browserLang.match(/en|vi/) ? browserLang : 'vi');
  }

  logout() {
    this.tokenStorage.signOut();
  }

  changeIcon() {
    this.isShowToggle = !this.isShowToggle;
    this.changeEmitter.emit();
  }

  changeIconClose() {
    this.isShowToggle = !this.isShowToggle;
    this.changeIconCloseEmitter.emit();
  }

  toggle() {
    let profileDropdownList = document.querySelector(".profile-dropdown-list");
    let btn = document.querySelector(".profile-dropdown-btn");
    if (profileDropdownList != null && btn != null) {
      profileDropdownList.classList.toggle("active");
    }
    this.removeDropdownLang();
  }

  clickedOutside(): void {
    this.removeDropdownLogout();
    this.removeDropdownLang();
  }

  menuToggle() {
    let langDropdownList = document.querySelector(".lang-dropdown-list");
    let selectLang = document.querySelector(".selected-lang");
    if (langDropdownList != null && selectLang != null) {
      langDropdownList.classList.toggle("active");
    }
    this.removeDropdownLogout();
  }

  removeDropdownLang() {
    let langDropdownList = document.querySelector(".lang-dropdown-list");
    let selectLang = document.querySelector(".selected-lang");
    if (langDropdownList != null && selectLang != null) {
      langDropdownList.classList.remove("active");
    }
  }

  removeDropdownLogout() {
    let profileDropdownList = document.querySelector(".profile-dropdown-list");
    let btn = document.querySelector(".profile-dropdown-btn");
    if (profileDropdownList != null && btn != null) {
      profileDropdownList.classList.remove("active");
    }
  }


  onSelect(lang: any): void {
    this.code = lang;
    this.languageService.setLanguage(lang);
    this.removeDropdownLang();
    this.tokenStorage.setLanguageDropdown(lang);
  }
}
