import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceAndEyesMouthEyeBrowsComponent } from './face-and-eyes-mouth-eye-brows.component';

describe('FaceAndEyesMouthEyeBrowsComponent', () => {
  let component: FaceAndEyesMouthEyeBrowsComponent;
  let fixture: ComponentFixture<FaceAndEyesMouthEyeBrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceAndEyesMouthEyeBrowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceAndEyesMouthEyeBrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
