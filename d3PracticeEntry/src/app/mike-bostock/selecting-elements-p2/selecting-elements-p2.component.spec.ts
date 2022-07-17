import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectingElementsP2Component } from './selecting-elements-p2.component';

describe('SelectingElementsP2Component', () => {
  let component: SelectingElementsP2Component;
  let fixture: ComponentFixture<SelectingElementsP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectingElementsP2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectingElementsP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
