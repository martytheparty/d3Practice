import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectingElementsComponent } from './selecting-elements.component';

describe('SelectingElementsComponent', () => {
  let component: SelectingElementsComponent;
  let fixture: ComponentFixture<SelectingElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectingElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectingElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
