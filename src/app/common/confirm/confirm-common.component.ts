import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
    selector: 'app-confirm-common',
    templateUrl: './confirm-common.component.html',
    styleUrls: ['./confirm-common.component.scss'],
    providers: [ConfirmationService, MessageService]
})
export class ConfirmCommonComponent implements OnChanges {

    @Input() actionDelete: any;
    @Output() public statusEvt = new EventEmitter<boolean>();
    public position: string = 'top';
    public confirmMessage: string = "popup.message";
    constructor(private confirmationService: ConfirmationService) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.actionDelete !== undefined) {
            this.confirmMessage = this.getMessage();
            setTimeout(() => {
                this.confirmPosition();
            }, 1);
        }
    }

    getMessage() {
        let message = this.actionDelete.message;
        if (message) {
            return message;
        }
        return "popup.message";
    }

    confirmPosition() {
        this.confirmationService.confirm({
            icon: 'pi pi-info-circle',
            acceptVisible: true,
            rejectVisible: true,
            accept: () => {
                this.statusEvt.emit(true);
            },
            reject: (type: any) => {
                if (type === ConfirmEventType.REJECT) {
                    this.statusEvt.emit(false);
                }
            },
            key: "positionDialog"
        });
    }

}
