import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingModule } from 'src/app/booking.module';
import { AdminsComponent } from './admins/admins.component';
import { AdminManagementRoutingModule } from './admin-management-router.module';
@NgModule({
    declarations: [
        AdminsComponent
    ],
    imports: [CommonModule, BookingModule, AdminManagementRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    exports: [
        AdminsComponent
    ],
})
export class AdminManagementModule { }
