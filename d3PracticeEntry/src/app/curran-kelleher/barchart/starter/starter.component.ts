import { Component, OnInit, ElementRef } from '@angular/core';
import { Selection } from 'd3';

import * as d3 from 'd3';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class BarchartStarterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  updateElement(el: ElementRef | false): void
  {

    if (el)
    {
      const svgSelector: Selection<SVGElement, undefined, null, undefined> = d3.select(el.nativeElement);

      svgSelector.attr('fill', 'gray').attr('width', 500).attr('height', 200).style('background', 'gray');
    }

  }

}
