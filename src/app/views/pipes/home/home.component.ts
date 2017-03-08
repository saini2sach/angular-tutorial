import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = "Custom Pipes";
  submenu = [{
    name: 'Addition',
    path: 'add'
  },{
    name: 'Subtraction',
    path:'subtract'
  }]

  constructor() { }

  ngOnInit() {
  }

}
