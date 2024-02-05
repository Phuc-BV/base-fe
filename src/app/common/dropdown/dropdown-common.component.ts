import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-dropdown-common',
    templateUrl: './dropdown-common.component.html',
    styleUrls: ['./dropdown-common.component.scss']
})
export class DropdownCommonComponent {

    @Input() formCtrName: string = '';
    @Input() formGroup: FormGroup = new FormGroup({});
    @Input() opValue: string = '';
    @Input() opName: string = '';
    @Input() styleClass: string = '';
    @Input() data: any[] = [];
    @Input() filter: boolean = false;
    @Input() placeholder: string = '';
    @Input() clear: boolean = false;
    @Input() emptyMessage: string = '';
    @Input() emptyFilterMessage: string = '';
    @Input() empty: string = '';
    @Input() scrollHeight: string = '260px';
    @Input() disabled: boolean = false;
    @Input() body: string = '';
    @Output() changeEmitter = new EventEmitter();
    @Output() clickEmitter = new EventEmitter();
    constructor(private cdRef: ChangeDetectorRef, public translate: TranslateService) { }

    get f() {
        return this.formGroup.get(this.formCtrName);
    }
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
