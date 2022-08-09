import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceAndEyesComponent } from './face-and-eyes.component';

describe('FaceAndEyesComponent', () => {
  let component: FaceAndEyesComponent;
  let fixture: ComponentFixture<FaceAndEyesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceAndEyesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceAndEyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
