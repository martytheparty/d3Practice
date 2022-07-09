import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { Selection } from 'd3';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

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
