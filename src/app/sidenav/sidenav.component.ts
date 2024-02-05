import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() closeToggle: boolean = false;
  constructor(
    private cdRef: ChangeDetectorRef, private renderer: Renderer2, private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.sendData()
  }

  @Output() dataEvent: EventEmitter<string> = new EventEmitter<string>();

  sendData() {
    this.dataEvent.emit();
  }

  toggleSubMenu(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    let arrowParent = clickedElement.parentElement?.parentElement;
    arrowParent?.classList.toggle("showMenu");
  }
}
