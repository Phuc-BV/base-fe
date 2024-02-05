import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingModule } from 'src/app/booking.module';
import { EventsComponent } from './events/events.component';
import { VouchersComponent } from './vouchers/vouchers.component';
import { EndowManagementRoutingModule } from './endow-management-router.module';
@NgModule({
    declarations: [
        EventsComponent,
        VouchersComponent
    ],
    imports: [CommonModule, BookingModule, EndowManagementRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    exports: [
        EventsComponent,
        VouchersComponent
    ],
})
export class EndowManagementModule { }
