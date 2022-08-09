import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Selection } from 'd3';
import * as d3 from 'd3';

@Component({
  selector: 'app-selecting-elements',
  templateUrl: './selecting-elements.component.html',
  styleUrls: ['./selecting-elements.component.scss']
})
export class SelectingElementsComponent implements AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('svg') sgv?: ElementRef;
  title = 'd3PracticeEntry';

  ngAfterViewInit(): void {
    const svgSelector: Selection<SVGElement, undefined, null, undefined> = d3.select(this.sgv?.nativeElement);

    svgSelector
      .style('background', 'gray')
      .attr('width', 600)
      .attr('height', 100);

    const circleSelector = svgSelector.selectAll("circle");
    circleSelector.style("fill", "steelblue");
    circleSelector.attr("r", 30);
  }

}
