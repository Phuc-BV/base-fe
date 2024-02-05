import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingModule } from 'src/app/booking.module';
import { ShopManagementRoutingModule } from './shop-management-router.module';
import { ShopManagerComponent } from './shop-manager/shop-manager.component';
import { OwnerComponent } from './owner/owner.component';
@NgModule({
    declarations: [
        ShopManagerComponent,
        OwnerComponent
    ],
    imports: [CommonModule, BookingModule, ShopManagementRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    exports: [
        ShopManagerComponent,
        OwnerComponent
    ],
})
export class ShopManagementModule { }
