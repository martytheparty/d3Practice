import { Component, ElementRef, OnInit } from '@angular/core';

import { Arc, DefaultArcObject, Selection } from 'd3';

import * as d3 from 'd3';

@Component({
  selector: 'app-face-and-eyes-mouth',
  templateUrl: './face-and-eyes-mouth.component.html',
  styleUrls: ['./face-and-eyes-mouth.component.scss']
})
export class FaceAndEyesMouthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  updateElement(ele: ElementRef | false): void
  {
    if (ele)
    {
      const svgSelection: Selection<SVGElement, undefined, null, undefined> = d3.select(ele.nativeElement);
      const height = 400;
      const width = 400;
      const radius = 150;

      const arcOptions: DefaultArcObject = {
        startAngle: 1.4*Math.PI/2,
        endAngle: 2.6*Math.PI/2,
        innerRadius: 70,
        outerRadius: 75
      };

      const arc: Arc<any, DefaultArcObject> = d3.arc().bind(this);
      const pathData: string = arc(arcOptions) as string;

      svgSelection
        .attr('fill', 'gray')
        .attr('width', width)
        .attr('height', height)
        .style('background', 'gray')

        const svgFaceSelection: Selection<SVGCircleElement, undefined, null, undefined> = svgSelection.append('circle');

        svgFaceSelection
        .attr('r', radius)
        .attr('cx', width/2)
        .attr('cy', height/2)
        .attr('stroke', 'black')
        .attr('stroke-width', '2px')
        .attr('fill', 'yellow');
  
        const leftEyeSection: Selection<SVGCircleElement, undefined, null, undefined> = svgSelection.append('circle');
        leftEyeSection
        .attr('r', radius/10)
        .attr('cx', width/3)
        .attr('cy', height/2.5)
        .attr('stroke', 'black')
        .attr('stroke-width', '2px')
        .attr('fill', 'blue');
  
        const rightEyeSection: Selection<SVGCircleElement, undefined, null, undefined> = svgSelection.append('circle');
        rightEyeSection
        .attr('r', radius/10)
        .attr('cx', 2*width/3)
        .attr('cy', height/2.5)
        .attr('stroke', 'black')
        .attr('stroke-width', '2px')
        .attr('fill', 'blue');

        const mouth = svgSelection
        .append('path')
        .attr('d', pathData)
        .attr('transform', 'translate('+width/2+',' + (1.7*height/3) + ')')
        .attr('fill','brown');
      }
    }
  }
