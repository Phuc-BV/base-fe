import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-status-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css']
})
export class StatusBookingComponent {

    @Input() status: number | undefined;

}
