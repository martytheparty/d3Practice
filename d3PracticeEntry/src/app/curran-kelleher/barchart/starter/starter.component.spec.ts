import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartStarterComponent } from './starter.component';

describe('StarterComponent', () => {
  let component: BarchartStarterComponent;
  let fixture: ComponentFixture<BarchartStarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarchartStarterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarchartStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
