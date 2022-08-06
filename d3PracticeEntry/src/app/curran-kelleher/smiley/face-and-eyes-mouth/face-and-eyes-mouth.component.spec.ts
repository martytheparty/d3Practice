import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceAndEyesMouthComponent } from './face-and-eyes-mouth.component';

describe('FaceAndEyesMouthComponent', () => {
  let component: FaceAndEyesMouthComponent;
  let fixture: ComponentFixture<FaceAndEyesMouthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceAndEyesMouthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceAndEyesMouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
