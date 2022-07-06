import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'ana-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  innerWidth: number = 0;
  isNavBarExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  isSmallDevice(): boolean {
    return this.innerWidth <= 750;
  }

  expandNavBar() {
    this.isNavBarExpanded = !this.isNavBarExpanded
  }

}
