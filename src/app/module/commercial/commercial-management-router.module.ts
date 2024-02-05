import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommercialsComponent } from './commercials/commercials.component';

const routes: Routes = [
    {
        path: '',
        component: CommercialsComponent,
        data: {}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CommercialManagementRoutingModule { }
