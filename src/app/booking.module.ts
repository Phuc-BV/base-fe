import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { BadgeModule } from 'primeng/badge';
import { ClickOutsideDirective } from './common/directive/click-outside.directive';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ToastCommonComponent } from './common/toast/toast-common.component';
import { ButtonCommonComponent } from './common/button/button-common.component';
import { ConfirmCommonComponent } from './common/confirm/confirm-common.component';
import { DropdownCommonComponent } from './common/dropdown/dropdown-common.component';
import { TableCommonComponent } from './common/table/table-common.component';
import { PaginatorModule } from 'primeng/paginator';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SearchComponent } from './common/status/search/search.component';
import { StatusBookingComponent } from './common/status/booking/booking.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        ClickOutsideDirective,
        ToastCommonComponent,
        ButtonCommonComponent,
        ConfirmCommonComponent,
        DropdownCommonComponent,
        TableCommonComponent,
        SearchComponent,
        StatusBookingComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AvatarModule,
        AvatarGroupModule,
        CardModule,
        TableModule,
        PasswordModule,
        InputTextModule,
        CheckboxModule,
        BadgeModule,
        DropdownModule,
        ButtonModule,
        FileUploadModule,
        ChartModule,
        DialogModule,
        ConfirmDialogModule,
        ToastModule,
        RadioButtonModule,
        SidebarModule,
        AccordionModule,
        FieldsetModule,
        PanelModule,
        PaginatorModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AvatarModule,
        AvatarGroupModule,
        CardModule,
        TableModule,
        PasswordModule,
        InputTextModule,
        CheckboxModule,
        BadgeModule,
        ClickOutsideDirective,
        DropdownModule,
        ButtonModule,
        FileUploadModule,
        ChartModule,
        DialogModule,
        AccordionModule,
        FieldsetModule,
        PanelModule,
        ToastCommonComponent,
        ButtonCommonComponent,
        ConfirmCommonComponent,
        DropdownCommonComponent,
        TableCommonComponent,
        TranslateModule,
        SearchComponent,
        StatusBookingComponent
    ],
    providers: [TranslateService, DynamicDialogConfig, DynamicDialogRef]
})
export class BookingModule { }
