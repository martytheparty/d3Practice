import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletingElementsComponent } from './deleting-elements.component';

describe('DeletingElementsComponent', () => {
  let component: DeletingElementsComponent;
  let fixture: ComponentFixture<DeletingElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletingElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletingElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
