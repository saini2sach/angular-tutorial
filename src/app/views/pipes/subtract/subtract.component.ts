import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtract',
  templateUrl: './subtract.component.html',
  styleUrls: ['./subtract.component.scss']
})
export class SubtractComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   fileSizes = [10, 100, 1000, 10000, 100000, 10000000, 10000000000];
  largeFileSize = Math.pow(10, 15)
}
