import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkBarchartComponent } from './ck-barchart.component';

describe('CkBarchartComponent', () => {
  let component: CkBarchartComponent;
  let fixture: ComponentFixture<CkBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CkBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CkBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
