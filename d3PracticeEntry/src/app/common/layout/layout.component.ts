import { Component, OnInit, ViewChild, ElementRef, Output, AfterViewInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  @ViewChild('svg') svg!: ElementRef;

  @Input() title = '';
  @Input() subTitle = '';
  @Output() el = new EventEmitter<false | ElementRef>(false) ;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.el.emit(this.svg);
  }

}
