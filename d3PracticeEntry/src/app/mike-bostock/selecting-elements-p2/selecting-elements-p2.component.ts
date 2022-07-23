import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Selection } from 'd3';
import * as d3 from 'd3';

@Component({
  selector: 'app-selecting-elements-p2',
  templateUrl: './selecting-elements-p2.component.html',
  styleUrls: ['./selecting-elements-p2.component.scss']
})
export class SelectingElementsP2Component implements AfterViewInit {

  @ViewChild('svg') svg?: ElementRef;

  constructor() { }


  ngAfterViewInit(): void
  {
    const svgSelector: Selection<SVGElement, undefined, null, undefined> = d3.select(this.svg?.nativeElement);
    svgSelector
      .style('background', 'gray')
      .attr('width', 720)
      .attr('height', 100);
   this.update();

    setInterval(() => {
      this.update()
    }, 500)

  }

  update(): void
  {    const svgSelector: Selection<SVGElement, undefined, null, undefined> = d3.select(this.svg?.nativeElement);
    const circleSelector: Selection<SVGCircleElement, undefined, SVGElement, undefined> = svgSelector.selectAll('circle');
    circleSelector.style("fill", "steelblue");
    circleSelector.attr("r", 30);
    circleSelector.attr("cx", function() { return 50 + Math.random() * 670; });
  }

}
