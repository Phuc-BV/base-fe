import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingModule } from 'src/app/booking.module';
import { CommercialManagementRoutingModule } from './commercial-management-router.module';
import { CommercialsComponent } from './commercials/commercials.component';
@NgModule({
    declarations: [
        CommercialsComponent
    ],
    imports: [CommonModule, BookingModule, CommercialManagementRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    exports: [
        CommercialsComponent
    ],
})
export class CommercialManagementModule { }
