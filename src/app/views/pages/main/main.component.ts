import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ana-main',
  templateUrl: './main.component.html',
  styleUrls: ['./styles/main.component.scss',
  './styles/main-name.component.scss',
    './styles/main-experience.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
