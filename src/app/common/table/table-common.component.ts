import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Paginator } from 'primeng/paginator';
import { TranslateService } from '@ngx-translate/core';
import { BookingCommon } from '../booking.common';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { DropdownService } from 'src/app/services/dropdown.service';

@Component({
    selector: 'app-table-common',
    templateUrl: './table-common.component.html',
    styleUrls: ['./table-common.component.scss'],
})
export class TableCommonComponent extends BookingCommon implements OnInit {

    @Input() data: any[] = [];
    @Input() columns: TableColumn[] = [];
    @Input() isDetail: boolean = false;
    @Input() scrollHeight: string = "650px";
    @Input() totalItemsOnePage: any = 1;
    @Input() showStatus: number = 0;

    @Output() changeEmitterEdit = new EventEmitter();
    @Output() changeEmitterDelete = new EventEmitter();
    @Output() changeEmitterDetail = new EventEmitter();
    @Output() changeEmitterPaginator = new EventEmitter();
    @Output() changeEmitterStatus = new EventEmitter();

    public startItem: number = 1;

    public endItem: number = 1;

    @ViewChild('paginator', { static: true }) paginator!: Paginator;

    public selectedOption: string | undefined;

    constructor(private cdRef: ChangeDetectorRef, public translate: TranslateService, private tokenStorage: TokenStorageService,
        public spinnerService: SpinnerService, private dropDownService: DropdownService) {
        super();
        this.translateDropdown(this.tokenStorage,
            this.spinnerService, this.dropDownService);
    }

    translateHeader(header: string): string {
        let labelHeader = this.translate.instant(`columnHeaders.${header}`);
        if (labelHeader == "columnHeaders.") {
            return '';
        }
        return labelHeader;
    }

    ngOnInit(): void {
        this.tokenStorage.sub.subscribe(() => {
            this.translateDropdown(this.tokenStorage,
                this.spinnerService, this.dropDownService);
        });
    }

    ngOnChanges() {
        this.renderReport();

    }

    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }

    get hasActionsHeader(): boolean {
        return this.columns.some(column => column.action !== undefined);
    }

    get hasActions(): boolean {
        return this.columns.some(column => column.action !== undefined && column.action !== '');
    }

    renderReport() {
        const startItem = this.currentPage * this.pageSize;
        this.startItem = this.totalRecord > 0 ? startItem + 1 : 0;
        if (this.totalRecord == 0) {
            this.endItem = 0;
        }
        this.endItem = Math.min(startItem + this.pageSize, this.totalRecord);
    }

    emitChangeEdit($event: any) {
        this.changeEmitterEdit.emit($event);
    }

    emitChangeDelete($event: any) {
        this.changeEmitterDelete.emit($event);
    }

    emitChangeDetail($event: any) {
        this.changeEmitterDetail.emit($event);
    }

    emitterPaginator($event: any) {
        this.changeEmitterPaginator.emit($event);
    }

    emitterStatus(value: any) {
        this.changeEmitterStatus.emit(value);
    }

}

interface TableColumn {
    field: string;
    header: string;
    width: string;
    action: string;
    position: string;
    alignFrozen: any;
    pFrozenColumn: any;
    showField: boolean;
}