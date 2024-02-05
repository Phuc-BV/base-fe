import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopManagerComponent } from './shop-manager/shop-manager.component';
import { OwnerComponent } from './owner/owner.component';

const routes: Routes = [
    {
        path: 'list',
        component: ShopManagerComponent,
        data: {}
    },
    {
        path: 'owner',
        component: OwnerComponent,
        data: {}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ShopManagementRoutingModule { }
