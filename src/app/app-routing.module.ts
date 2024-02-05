import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './security/login/login.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '', component: HomeComponent,
    children:
      [
        {
          path: 'dashboard',
          loadChildren: () => import('./module/dashboard/dashboard-management.module').then(d => d.DashboardManagementModule)
        },
        {
          path: 'shop',
          loadChildren: () => import('./module/shop/shop-management.module').then(d => d.ShopManagementModule)
        },
        {
          path: 'customer',
          loadChildren: () => import('./module/customer/customer-management.module').then(d => d.CustomerManagementModule)
        },
        {
          path: 'endow',
          loadChildren: () => import('./module/endow/endow-management.module').then(d => d.EndowManagementModule)
        },
        {
          path: 'admin',
          loadChildren: () => import('./module/admin/admin-management.module').then(d => d.AdminManagementModule)
        },
        {
          path: 'schedule',
          loadChildren: () => import('./module/schedule/schedules-management.module').then(d => d.ScheduleManagementModule)
        },
        {
          path: 'post',
          loadChildren: () => import('./module/post/post-management.module').then(d => d.PostManagementModule)
        },
        {
          path: 'commercial',
          loadChildren: () => import('./module/commercial/commercial-management.module').then(d => d.CommercialManagementModule)
        },
        {
          path: 'loyalty',
          loadChildren: () => import('./module/loyalty/loyalty-management.module').then(d => d.LoyaltyManagementModule)
        },
        {
          path: 'revenue',
          loadChildren: () => import('./module/revenue/revenue-management.module').then(d => d.RevenueManagementModule)
        }
      ],
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
