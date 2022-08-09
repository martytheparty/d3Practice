import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurranSmileyStarterComponent } from './curran-smiley-starter.component';

describe('CurranSmileyStarterComponent', () => {
  let component: CurranSmileyStarterComponent;
  let fixture: ComponentFixture<CurranSmileyStarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurranSmileyStarterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurranSmileyStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
