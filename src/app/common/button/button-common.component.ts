import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-button-common',
    templateUrl: './button-common.component.html',
    styleUrls: ['./button-common.component.scss']
})
export class ButtonCommonComponent {

    @Input() labelName: string = "";
    @Input() iconName: string = "";
    @Input() disabled: boolean = false;
    @Input() styleClass: string = "";
    @Output() changeEmitter = new EventEmitter();
    @Output() clickEmitter = new EventEmitter();
    constructor(private cdRef: ChangeDetectorRef) { }

    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }

    emitChange($event: any) {
        this.changeEmitter.emit($event);
    }

    emitClick($event: any) {
        this.clickEmitter.emit($event);
    }
}
