import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { Selection } from 'd3';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3implementation',
  templateUrl: './d3implementation.component.html',
  styleUrls: ['./d3implementation.component.scss']
})
export class D3implementationComponent implements AfterViewInit {

  @ViewChild('svg') sgv?: ElementRef;
  title = 'd3PracticeEntry';

  ngAfterViewInit(): void {
    const svgSelector: Selection<SVGElement, undefined, null, undefined> = d3.select(this.sgv?.nativeElement);

    svgSelector
      .style('background', 'gray')
      .attr('width', 600)
      .attr('height', 100);
  }

}
