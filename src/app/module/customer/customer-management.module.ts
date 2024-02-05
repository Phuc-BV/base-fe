import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingModule } from 'src/app/booking.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomerManagementRoutingModule } from './customer-management-router.module';
@NgModule({
    declarations: [
        CustomersComponent
    ],
    imports: [CommonModule, BookingModule, CustomerManagementRoutingModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    exports: [
        CustomersComponent
    ],
})
export class CustomerManagementModule { }
