import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

import { Selection } from 'd3';
import * as d3 from 'd3';

@Component({
  selector: 'app-curran-smiley-starter',
  templateUrl: './curran-smiley-starter.component.html',
  styleUrls: ['./curran-smiley-starter.component.scss']
})
export class CurranSmileyStarterComponent implements AfterViewInit {

  @ViewChild('svg') svg!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const svgSelector: Selection<SVGElement, undefined, null, undefined> = d3.select(this.svg.nativeElement);
    svgSelector.attr('fill', 'gray').attr('width', 400).attr('height', 400).style('background', 'gray');
  }



}
