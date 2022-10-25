import { Component, OnInit, ElementRef } from '@angular/core';

import { DSVRowArray, ScaleLinear, Selection, max, ScaleBand } from 'd3';

import * as d3 from 'd3';
import { throwError } from 'rxjs';

interface population
{
  country: string;
  population: string;
  value: number;
}

@Component({
  selector: 'app-ck-barchart',
  templateUrl: './ck-barchart.component.html',
  styleUrls: ['./ck-barchart.component.scss']
})
export class CkBarchartComponent {

  svgSelector: Selection<SVGElement, undefined, null, undefined> | undefined;
  chartGroupSelector: Selection<SVGGElement, undefined, null, undefined> | undefined;
  width = 600;
  height = 200;
  margin = { top: 20, left: 75, bottom: 20, right: 20 };
  innerWidth = this.width - this.margin.left - this.margin.right;
  innerHeight = this.height - this.margin.top - this.margin.bottom;

  populationData: population[] = [];

  constructor() { }

  updateElement(svgElement: ElementRef | false): void
  {

    if (svgElement)
    {
      this.svgSelector = d3.select(svgElement.nativeElement);

      // the box that the chart is drawn within
      this.svgSelector
        .attr('fill', 'gray')
        .attr('width', this.width)
        .attr('height', this.height)
        .style('background', '#cecece')
        .style('border','1px solid black');

      this.chartGroupSelector = this.svgSelector.append('g');
      this.chartGroupSelector.attr('transform',`translate(${this.margin.left}, ${this.margin.top})`);

      if (this.populationData.length === 0)
      {
        d3
          .csv('assets/curran/barchart/data.csv')
          .then(
          (countryPopulations: DSVRowArray<string>) => {
            this.populationData = countryPopulations.map(
              (rec: Partial<population>) => {
                let country: string = rec.country as string;
                const population: string = rec.population as string;
                const value: number = rec.value as number;

                if (country === 'United States') country = 'USA'

                const record: population = {
                  country,
                  population,
                  value
                };

                return record;
              }
            );
            
            this.populationData.forEach(
              (d: population) => {
                d.value = parseInt(d.population)*1000;
              }
            );
            this.render();
          }
        );
      }
    }
  }

  render()
  {
    const populationList = this.populationData.map( 
      (pRecord) => {
        return pRecord.value as number; 
      }
    );
    const maxPopulation = d3.max( populationList ) as number;
    const xScale: ScaleBand<string> = d3
                                        .scaleBand()
                                        .domain(this.populationData.map( d => d.country ))
                                        .range([0, this.innerWidth]);

    this.setupBottomAxis(xScale);
    this.setupTopLabels(populationList);
    this.setupLeftAxis(maxPopulation);
    this.setupChart(xScale, maxPopulation);

  }

  setupTopLabels(populationList: number[])
  {
    const xPopulationScale: ScaleBand<string> = d3
                                        .scaleBand()
                                        .domain(populationList.map( d => {
                                          let label = '';
                                          if (d > 1000000000)
                                          {
                                            label = (d/1000000000).toFixed(2) + 'B'
                                          } else {
                                            label = (d/1000000).toFixed(2) + 'M'
                                          }
                                          return label; 
                                        }))
                                        .range([0, this.innerWidth]);


    // draws the bottom labels
    const bottomAxis = d3.axisBottom(xPopulationScale);
    const xAxisGroup: Selection<SVGGElement, undefined, null, undefined> | undefined 
      = this.svgSelector?.append('g')
        .attr('transform', `translate(${this.margin.left},${this.margin.top - 18})`) as Selection<SVGGElement, undefined, null, undefined>;
    0
    bottomAxis(xAxisGroup.append('g')); // add the xAxis to the drawing
  }

  setupLeftAxis(maxPopulation: number)
  {
    const yScale: ScaleLinear<number, number, never> = d3.scaleLinear()
    .domain([0, maxPopulation])
    .range([this.innerHeight, 0]);
    const yAxis = d3.axisLeft(yScale);
    const axisGroup: Selection<SVGGElement, undefined, null, undefined>  
    = this.svgSelector?.append('g') as unknown as Selection<SVGGElement, undefined, null, undefined>;
    
    axisGroup
      .attr('transform', `translate(${this.margin.left},${this.margin.bottom})`) as Selection<SVGGElement, undefined, null, undefined>;

    yAxis(axisGroup);
  }

  setupBottomAxis(xScale: ScaleBand<string>)
  {
    // draws the bottom axis
    const bottomAxis = d3.axisBottom(xScale);
    const xAxisGroup: Selection<SVGGElement, undefined, null, undefined> | undefined 
                      = this.svgSelector?.append('g') as Selection<SVGGElement, undefined, null, undefined>;
                      
    xAxisGroup.attr('transform', `translate(${this.margin.left},${this.height-this.margin.bottom})`);
    bottomAxis(xAxisGroup.append('g')); // add the xAxis to the drawing
  }

  setupChart(xScale: ScaleBand<string>, maxPopulation: number)
  {
    // chartYScale is a function that maps a y coordinate to a population
    const chartYScale: ScaleLinear<number, number, never> = d3
                                                        .scaleLinear()
                                                        .domain([maxPopulation, 0])
                                                        .range([this.innerHeight, 0]);
     
     this.chartGroupSelector?.selectAll('rect')
                    .data(this.populationData)
                    .enter()
                    .append('rect')
                    .attr('fill','wheat')
                    .attr('stroke', 'black')  // draws the tan bars
                    .attr('x', (d: population, i: number) => (this.innerWidth/this.populationData.length)*i) // calculates the x-pos
                    .attr('width', rec => xScale.bandwidth() ) // calculates the width of each rectangle
                    .attr('height', (d: population) => chartYScale(d.value)) // calculates the height of each rectangle
                    .attr('y', (d: population) => this.innerHeight - chartYScale(d.value)); // calculates how far to vert offset
  }
}
