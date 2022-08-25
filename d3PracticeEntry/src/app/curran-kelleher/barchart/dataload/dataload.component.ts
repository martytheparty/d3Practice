import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-barcart-dataload',
  templateUrl: './dataload.component.html',
  styleUrls: ['./dataload.component.scss']
})
export class BarchartDataloadComponent implements OnInit {

  data: any;

  constructor() { }

  // /assets/curran/barchart/data.csv

  ngOnInit(): void {
    d3.csv('assets/curran/barchart/data.csv').then(
      (data) => {
        this.data = data;
      }
    );
  }

}
