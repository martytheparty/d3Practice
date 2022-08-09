import { Component, ElementRef, OnInit } from '@angular/core';

import { Arc, DefaultArcObject, Selection, svg } from 'd3';

import * as d3 from 'd3';

@Component({
  selector: 'app-face-and-eyes-mouth-eye-brows',
  templateUrl: './face-and-eyes-mouth-eye-brows.component.html',
  styleUrls: ['./face-and-eyes-mouth-eye-brows.component.scss']
})
export class FaceAndEyesMouthEyeBrowsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  updateElement(ele: ElementRef | false): void
  {
    if (ele)
    {
      const width = 400;
      const height = 400;
      const svgSelection: Selection<any, undefined, null, undefined> = d3.select(ele?.nativeElement);
      svgSelection
        .attr('width', width)
        .attr('height', height)
        .style('background', 'gray');

      const svgGroup: Selection<SVGGElement, undefined, null, undefined> = svgSelection.append('g');
      const svgFace = svgGroup.append('circle');
      svgFace
        .attr('r', 180)
        .attr('cx', 200)
        .attr('cy', 200)
        .attr('fill','yellow');

      const leftEye = svgGroup.append('circle');
      leftEye
        .attr('r', 20)
        .attr('cx', (1/3)*width)
        .attr('cy', (1/3)*height)
        .attr('fill', 'blue')

      const rightEye = svgGroup.append('circle');
      rightEye
        .attr('r', 20)
        .attr('cx', (2/3)*width)
        .attr('cy', (1/3)*height)
        .attr('fill', 'blue')

      const leftEyeBrow = svgGroup.append('rect');
      leftEyeBrow
        .attr('width', 30)
        .attr('height', 10)
        .attr('fill', 'brown')
        .attr('x', (1/3)*width - 15)
        .attr('y', (1/3)*height - 40)

      const rightEyeBrow = svgGroup.append('rect');
      rightEyeBrow
        .attr('width', 30)
        .attr('height', 10)
        .attr('fill', 'brown')
        .attr('x', (2/3)*width - 15)
        .attr('y', (1/3)*height - 40)

      const arc: Arc<any, DefaultArcObject> = d3.arc();

      const arcObject: DefaultArcObject = {
        startAngle: Math.PI/2,
        endAngle: 1.5*Math.PI,
        innerRadius: 70,
        outerRadius: 80
      };
      const path: string = arc(arcObject) as string;
      const mouth = svgGroup.append('path');

      mouth
        .attr('fill', 'brown')
        .attr('d', path)
        .attr('transform', `translate(${.5*width},${.6*height})`)
      
      





    };



      

  }

}
