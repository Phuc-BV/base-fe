import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoyaltyComponent } from './loyaltys/loyalty.component';

const routes: Routes = [
    {
        path: '',
        component: LoyaltyComponent,
        data: {}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoyaltyManagementRoutingModule { }
