import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingModule } from 'src/app/booking.module';
import { LoyaltyComponent } from './loyaltys/loyalty.component';
import { LoyaltyManagementRoutingModule } from './loyalty-management-router.module';
@NgModule({
    declarations: [
        LoyaltyComponent
    ],
    imports: [CommonModule, BookingModule, LoyaltyManagementRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    exports: [
        LoyaltyComponent
    ],
})
export class LoyaltyManagementModule { }
