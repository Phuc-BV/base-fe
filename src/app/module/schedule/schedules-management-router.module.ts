import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulesComponent } from './schedules/schedules.component';

const routes: Routes = [
    {
        path: '',
        component: SchedulesComponent,
        data: {}
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ScheduleManagementRoutingModule { }
