import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss']})
export class HomeComponent implements OnInit {

  title = 'Angular Forms';
  submenu = [
    {
      name: 'Model Form',
      path: 'model'
    }, {
      name: 'Template Form',
      path: 'template'
    }
  ];
  constructor() {}

  ngOnInit() {} 

}
