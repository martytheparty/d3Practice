import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Selection } from 'd3';
import * as d3 from 'd3';

@Component({
  selector: 'app-extra-data',
  templateUrl: './extra-data.component.html',
  styleUrls: ['./extra-data.component.scss']
})
export class ExtraDataComponent implements OnInit, AfterViewInit {

  @ViewChild('svg') svg!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      const data = [30, 30, 30, 30];
      const svgSlection: Selection<SVGElement, undefined, null, undefined> = d3.select(this.svg.nativeElement);
      const circlesSelection = svgSlection.selectAll('circle').data(data);
      
      // this updates all of the existing circles/data pairs
      circlesSelection.attr("cy", 60);
      circlesSelection.attr("cx", function(d, i) { return i * 100 + 30; });
      circlesSelection.attr('r', (d) => { return d as number});
      circlesSelection.attr('fill', 'blue');

      // this updates the new circle/data pair
      const circleEnter = circlesSelection.enter().append('circle');
      circleEnter.attr("cy", 60);
      circleEnter.attr("cx", function(d, i) { return i * 100 + 30; });
      circleEnter.attr("r", (d) => { const radius = d as number; return radius; });
      circleEnter.attr('fill', 'red');
  }
}
