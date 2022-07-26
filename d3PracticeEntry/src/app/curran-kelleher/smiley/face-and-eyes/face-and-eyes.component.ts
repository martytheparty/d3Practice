import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import { Selection } from 'd3';

import * as d3 from 'd3';

@Component({
  selector: 'app-face-and-eyes',
  templateUrl: './face-and-eyes.component.html',
  styleUrls: ['./face-and-eyes.component.scss']
})
export class FaceAndEyesComponent implements AfterViewInit {

  @ViewChild('svg') svg!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const height = 400;
    const width = 400;
    const radius = 150;

    const svgSelection: Selection<SVGElement, undefined, null, undefined> = d3.select(this.svg.nativeElement);
    svgSelection
      .attr('fill', 'gray')
      .attr('width', width)
      .attr('height', height)
      .style('background', 'gray');

    const svgFaceSection: Selection<SVGCircleElement, undefined, null, undefined> = svgSelection.append('circle');
    svgFaceSection
    .attr('r', radius)
    .attr('cx', width/2)
    .attr('cy', height/2)
    .attr('stroke', 'black')
    .attr('stroke-width', '2px')
    .attr('fill', 'yellow')

    const leftEyeSection: Selection<SVGCircleElement, undefined, null, undefined> = svgSelection.append('circle');
    leftEyeSection
    .attr('r', radius/10)
    .attr('cx', width/3)
    .attr('cy', height/2.5)
    .attr('stroke', 'black')
    .attr('stroke-width', '2px')
    .attr('fill', 'blue')

    const rightEyeSection: Selection<SVGCircleElement, undefined, null, undefined> = svgSelection.append('circle');
    rightEyeSection
    .attr('r', radius/10)
    .attr('cx', 2*width/3)
    .attr('cy', height/2.5)
    .attr('stroke', 'black')
    .attr('stroke-width', '2px')
    .attr('fill', 'blue')


  }

}
