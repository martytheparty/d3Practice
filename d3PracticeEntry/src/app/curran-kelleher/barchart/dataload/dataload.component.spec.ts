import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartDataloadComponent } from './dataload.component';

describe('DataloadComponent', () => {
  let component: BarchartDataloadComponent;
  let fixture: ComponentFixture<BarchartDataloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarchartDataloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarchartDataloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
