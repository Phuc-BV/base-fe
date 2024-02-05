import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingModule } from 'src/app/booking.module';
import { ShopComponent } from './shop/shop.component';
import { RevenueManagementRoutingModule } from './revenue-management-router.module';
@NgModule({
    declarations: [
        ShopComponent
    ],
    imports: [CommonModule, BookingModule, RevenueManagementRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    exports: [
        ShopComponent
    ],
})
export class RevenueManagementModule { }
