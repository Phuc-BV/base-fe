import { DynamicDialogRef } from "primeng/dynamicdialog";
import { ApiResponse } from "../dto/response/api_response.component";
import { HttpStatusCodeConstants, LANGUAGE, PageSize } from "./constants";
import { SearchResponse } from "../dto/api_search_response.component";
import { LanguageService } from "../services/language.service";
import { TranslateService } from "@ngx-translate/core";
import { TokenStorageService } from "../services/token-storage.service";
import { DropdownService } from "../services/dropdown.service";
import { SpinnerService } from "../services/spinner.service";
import { ValidatorCommon } from "./validator.common";
import { DropdownResponse } from "../dto/drop_down_response.component";
import { Provinces } from "../dto/response/province_response.component";
import { Districts } from "../dto/response/district_response.component";

export class BookingCommon {
    public submit: boolean = false;
    public apiResponse: ApiResponse = new ApiResponse();
    public searchResponse: SearchResponse = new SearchResponse();
    public httpStatusCode = HttpStatusCodeConstants;
    public confirmAction: any;
    public tableColumns: any[] = [];
    public disabledBtn: boolean = false;
    public ref: DynamicDialogRef | undefined;
    public currentPage = 0;
    public totalRecord: number = 1;
    public pageSize = PageSize.PAGE_SIZE;
    public pageLinkSize = PageSize.PAGE_LINK_SIZE;
    public resultDropdown: any = [];
    public statusSearch: DropdownResponse[] = [];
    public statusBooking: DropdownResponse[] = [];
    public genderDropdown: DropdownResponse[] = [];
    public districts: Districts[] = [];
    public provinces: Provinces[] = [];

    initLanguages(languageService: LanguageService, translate: TranslateService) {
        languageService.selectedLanguage$.subscribe(lang => {
            translate.use(lang);
        });
    }

    showToast(status: any, item: any) {
        let statusCode: any;
        if (status == 0) {
            statusCode = this.httpStatusCode.HTTP_STATUS_200;
        } else {
            statusCode = this.httpStatusCode.HTTP_STATUS_400;
        }
        this.apiResponse = {
            status: statusCode,
            result: item,
        };
    }

    translateDropdown(tokenStorage: TokenStorageService, spinnerService: SpinnerService, dropDownService: DropdownService) {
        let language = tokenStorage.getLanguage();
        if (ValidatorCommon.checkIsNullEmptyUndefined(language) && language === LANGUAGE.VI) {
            this.translateViDropdown(dropDownService);
        } else {
            this.translateEnDropdown(dropDownService);
        }
        setTimeout(() => {
            spinnerService.resetSpinner();
        }, 500);
    }

    translateViDropdown(dropDownService: DropdownService) {
        dropDownService.getDropDownVi().subscribe(
            {
                next: (response) => {
                    this.resultDropdown = response;
                },
                complete: () => {
                    this.fetchAllDropdowns(this.resultDropdown);
                }
            }
        );
    }

    translateEnDropdown(dropDownService: DropdownService) {
        dropDownService.getDropDownEn().subscribe(
            {
                next: (response) => {
                    this.resultDropdown = response;
                },
                complete: () => {
                    this.fetchAllDropdowns(this.resultDropdown);
                }
            }
        );
    }

    fetchAllDropdowns(res: any) {
        this.statusSearch = res.status;
        this.statusBooking = res.statusBooking;
        this.genderDropdown = res.gender;
    }

    dropdownDistrict(tokenStorage: TokenStorageService, dropDownService: DropdownService) {
        let district = tokenStorage.getDistrict();
        if (Object.entries(district).length !== 0) {
            this.districts = district;
        } else {
            dropDownService.dropDowDistrictCode().subscribe({
                next: (response) => {
                    this.districts = response;
                },
                complete: () => {
                    tokenStorage.saveDistrict(this.districts);
                },
                error: (err) => {
                    this.districts = [];
                }
            });
        }
    }

    dropdownProvince(tokenStorage: TokenStorageService, dropDownService: DropdownService) {
        let province = tokenStorage.getProvince();
        if (Object.entries(province).length !== 0) {
            this.provinces = province;
        } else {
            dropDownService.dropDowProvinceCode().subscribe({
                next: (response) => {
                    this.provinces = response;
                },
                complete: () => {
                    tokenStorage.saveProvince(this.provinces);
                },
                error: (err) => {
                    this.provinces = [];
                }
            });
        }
    }
}