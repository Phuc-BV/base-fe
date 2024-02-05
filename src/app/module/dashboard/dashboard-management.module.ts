import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardManagementRoutingModule } from './dashboard-management-route.module';
import { BookingModule } from 'src/app/booking.module';
import { TranslateService } from '@ngx-translate/core';
@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [CommonModule, BookingModule, DashboardManagementRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [TranslateService],
    exports: [
        DashboardComponent
    ],
})
export class DashboardManagementModule { }
