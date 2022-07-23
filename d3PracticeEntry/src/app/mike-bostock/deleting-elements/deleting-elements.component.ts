import { Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-deleting-elements',
  templateUrl: './deleting-elements.component.html',
  styleUrls: ['./deleting-elements.component.scss']
})
export class DeletingElementsComponent implements AfterViewInit {

  circleData: number[] = [30, 60, 90];

  @ViewChild('svg') svg!: ElementRef; 

  constructor() { }

  ngAfterViewInit(): void {
    const svgSelect = d3.select(this.svg.nativeElement);
    const circlesSelect = svgSelect.selectAll('circle').data(this.circleData);
    
    circlesSelect
      .attr('val', d => d)
      .attr('type', 'exists')
      .attr('r', 20)
      .attr('cy', 40)
      .attr('cx', (d, i) => (i*50 + 100))
      .attr('fill', 'blue');

    const circleEnter = circlesSelect
      .enter()
      .append('circle')
      .attr('r', 20)
      .attr('cy', 40)
      .attr('cx', (d, i) => (i*50 + 100))
      .attr('fill', 'red');

  }

  deleteLastRecord()
  {
    this.circleData.pop();

    const svgSelect = d3.select(this.svg.nativeElement);
    const circlesSelect = svgSelect.selectAll('circle').data(this.circleData);

    const circleDelete = circlesSelect
      .exit()
      .remove();
  }

}
