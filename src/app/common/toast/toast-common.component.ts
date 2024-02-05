import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpStatusCodeConstants } from '../constants';
import { ApiResponse } from 'src/app/dto/response/api_response.component';

@Component({
    selector: 'app-toast-common',
    templateUrl: './toast-common.component.html',
    styleUrls: ['./toast-common.component.css'],
    providers: [MessageService],
})
export class ToastCommonComponent implements OnChanges {

    public httpStatusCode = HttpStatusCodeConstants;

    @Input() action: ApiResponse = new ApiResponse();

    @Output() onChangePartner: EventEmitter<number> = new EventEmitter();

    public token: any;
    constructor(
        private messageService: MessageService
    ) {
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (this.action.status !== undefined) {
            if (this.action.status === this.httpStatusCode.HTTP_STATUS_200) {
                this.success();
            } else {
                this.error();
            }
        }
    }

    success() {
        setTimeout(() => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
        }, 200);

    }

    error() {
        setTimeout(() => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
        }, 200);
    }
}
