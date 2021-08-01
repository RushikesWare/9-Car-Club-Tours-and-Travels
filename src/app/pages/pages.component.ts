import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
  <app-subheader></app-subheader>
  <router-outlet></router-outlet>
  <app-subfooter></app-subfooter> 
  ` 
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
