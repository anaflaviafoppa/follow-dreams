import {Component, HostListener, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'ana-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  innerWidth: number = 0;
  isNavBarExpanded: boolean = false;

  constructor(private router: Router) { }

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

  closeNavBar(event: any) {
    console.log('up');
    this.isNavBarExpanded = false;
  }

  openNavBar(event: any) {
    console.log('down');
    this.isNavBarExpanded = true;
  }

  navigateTo(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
  }

}
