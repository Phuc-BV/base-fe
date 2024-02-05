import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VouchersComponent } from './vouchers/vouchers.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
    {
        path: 'event',
        component: EventsComponent,
        data: {}
    },
    {
        path: 'voucher',
        component: VouchersComponent,
        data: {}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EndowManagementRoutingModule { }
