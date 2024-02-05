import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingModule } from 'src/app/booking.module';
import { SchedulesComponent } from './schedules/schedules.component';
import { ScheduleManagementRoutingModule } from './schedules-management-router.module';
@NgModule({
    declarations: [
        SchedulesComponent
    ],
    imports: [CommonModule, BookingModule, ScheduleManagementRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    exports: [
        SchedulesComponent
    ],
})
export class ScheduleManagementModule { }
