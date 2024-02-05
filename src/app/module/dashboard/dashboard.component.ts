import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TestColumn } from 'src/app/column/table-column';
import { BookingCommon } from 'src/app/common/booking.common';
import { CommonAction } from 'src/app/common/constants';
import { Test } from 'src/app/dto/response/test_response.component';
import { DropdownService } from 'src/app/services/dropdown.service';
import { LanguageService } from 'src/app/services/language.service';
import { ShopService } from 'src/app/services/shop/shop.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BookingCommon implements OnInit {
  public products: Test[] = [];
  public formGroupSearch: FormGroup = new FormGroup({});
  constructor(private router: Router, private shopService: ShopService,
    private spinnerService: SpinnerService, public translateService: TranslateService,
    private cdRef: ChangeDetectorRef, private languageService: LanguageService, private dropDownService: DropdownService, private tokenStorage: TokenStorageService) {
    super();
    this.translateDropdown(this.tokenStorage, this.spinnerService, this.dropDownService);
  }

  ngOnInit(): void {
    this.initLanguages(this.languageService, this.translateService);
    this.tokenStorage.sub.subscribe(() => {
      this.translateDropdown(this.tokenStorage,
        this.spinnerService, this.dropDownService);
    });
    this.initFormGroup();
    this.dropdownProvince(this.tokenStorage, this.dropDownService);
    this.dropdownDistrict(this.tokenStorage, this.dropDownService);
    this.tableColumns = TestColumn.column;
    this.getListDeal();
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  initFormGroup() {
    this.formGroupSearch = new FormGroup({
      shopName: new FormControl(),
      phoneNumber: new FormControl(),
      gender: new FormControl(),
      service: new FormControl(),
      address: new FormControl(),
      districtCode: new FormControl(),
      provinceCode: new FormControl()
    });
  }

  getListDeal() {
    this.shopService.getListDeal(4, 0, this.currentPage, this.pageSize).subscribe({
      next: (response) => {
        this.searchResponse = response;
      },
      complete: () => {
        if (this.searchResponse.status.code === this.httpStatusCode.HTTP_STATUS_200) {
          this.products = this.searchResponse.result?.items;
          this.totalRecord = this.searchResponse.result?.totalItems;
          this.spinnerService.resetSpinner();
        } else {
          this.totalRecord = 0;
          this.products = []
        }
      },
      error: (err) => {
        this.totalRecord = 0;
        this.products = [];
      },
    });
  }

  pageClick($event: any) {
    this.currentPage = $event.page;
    this.getListDeal();
  }

  changeStatus($event: any) {
    console.log($event)
  }

  upsert() {
    this.router.navigate(['/warehouse/system/employee/upsert']);
  }

  editData(data: any) {
    this.router.navigate(['/warehouse/system/employee/upsert/' + data.id]);
  }

  test() {
    this.showToast(0, CommonAction.DELETE_FLAG);
  }

  deleteData(data: any) {
    this.confirmAction = {
      id: data.id,
      header: ''
    }
  }

  deleteConfirmClick(event: any) {
    if (event) {
      this.showToast(0, CommonAction.DELETE_FLAG);
    }
  }

}
