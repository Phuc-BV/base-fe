import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router, Scroll } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public breadcrumbItems: any;
  public isShowDivIf = false;
  public isRoutePointLocation = false;
  @Output() changeEmitter = new EventEmitter();

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.replaceRouteToBreadcrumb(event.url);
      }
    });
  }

  ngOnInit(): void {
    this.handleClick();
  }

  openNav() {
    let profileDropdownList = document.querySelector(".sidebar");
    let main = document.getElementById("main");
    let box = document.getElementById("mySidebar");
    let btn = document.querySelector(".pi-bars");
    if (this.isShowDivIf) {
      if (profileDropdownList != null && btn != null && main != null && box != null) {
        main.setAttribute("style", "width: calc(100% - 205px);margin-left:205px;transition: all 0.5s ease;");
        box.setAttribute("style", "width: 205px;transition: all 0.5s ease;");
        profileDropdownList.classList.remove("close");
      }
      this.isShowDivIf = !this.isShowDivIf;
    }
  }


  closeNav() {
    let profileDropdownList = document.querySelector(".sidebar");
    let main = document.getElementById("main");
    let box = document.getElementById("mySidebar");
    let btn = document.querySelector(".pi-bars");
    if (!this.isShowDivIf) {
      if (profileDropdownList != null && btn != null && main != null && box != null) {
        profileDropdownList.classList.toggle("close");
        main.setAttribute("style", "width: calc(100% - 43px);margin-left:43px; transition: all 0.5s ease;");
        box.setAttribute("style", "width: 43px;transition:0.5s");
      }
      this.isShowDivIf = !this.isShowDivIf;
    }
  }

  handleClick() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let url = event.url;
        this.checkUrl(url);
        return this.replaceRouteToBreadcrumb(url);
      } else if (event instanceof Scroll) {
        let url = event.routerEvent.url;
        this.checkUrl(url);
        return this.replaceRouteToBreadcrumb(event.routerEvent.url)
      }
    });
  }

  replaceRouteToBreadcrumb(router: string) {
    const element = document.getElementById('breadcrumb');
    if (element) {
      const iconPi = '<i class="pi pi-chevron-right cursor-pointer font-normal text-xs p-1"></i>';
      element.innerHTML = this.capitalizeFirstLetterInPath(router).replaceAll("/", iconPi);
    }
  }

  capitalizeFirstLetterInPath(path: string): string {
    const words = path.split('/');
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join('/');
  }

  checkUrl(url: string) {
    if (url === "/warehouse/point-location") {
      this.isRoutePointLocation = true;
    } else {
      this.isRoutePointLocation = false;
    }
  }
}
