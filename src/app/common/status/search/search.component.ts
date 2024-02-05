import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-status-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {

    @Input() status: number | undefined;

}
