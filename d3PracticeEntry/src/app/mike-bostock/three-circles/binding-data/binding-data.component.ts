import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

import { Selection } from 'd3';
import * as d3 from 'd3';

@Component({
  selector: 'app-binding-data',
  templateUrl: './binding-data.component.html',
  styleUrls: ['./binding-data.component.scss']
})
export class BindingDataComponent implements OnInit, AfterViewChecked {

  @ViewChild('svg') svg?: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
      const circleData: number[] = [30, 60, 90];
      const svgSelection: Selection<SVGElement, undefined, null, undefined> = d3.select(this.svg?.nativeElement);
      const circlesSelection = svgSelection.selectAll('circle').data(circleData);
      circlesSelection.attr('r', (d) => { return d as number})
  }

}
