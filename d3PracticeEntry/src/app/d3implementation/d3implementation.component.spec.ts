import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3implementationComponent } from './d3implementation.component';

describe('D3implementationComponent', () => {
  let component: D3implementationComponent;
  let fixture: ComponentFixture<D3implementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3implementationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D3implementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
