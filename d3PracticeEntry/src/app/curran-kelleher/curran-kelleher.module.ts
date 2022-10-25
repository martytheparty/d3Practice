import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurranSmileyStarterComponent } from './smiley/curran-smiley-starter/curran-smiley-starter.component';
import { MatCardModule } from '@angular/material/card';
import { FaceAndEyesComponent } from './smiley/face-and-eyes/face-and-eyes.component';
import { FaceAndEyesMouthComponent } from './smiley/face-and-eyes-mouth/face-and-eyes-mouth.component';
import { CommonLayoutModule } from '../common/common/common-layout.module';
import { FaceAndEyesMouthEyeBrowsComponent } from './smiley/face-and-eyes-mouth-eye-brows/face-and-eyes-mouth-eye-brows.component';
import { BarchartStarterComponent } from './barchart/starter/starter.component';
import { BarchartDataloadComponent } from './barchart/dataload/dataload.component';
import { CkBarchartComponent } from './barchart/ck-barchart/ck-barchart.component';

@NgModule({
  declarations: [
    CurranSmileyStarterComponent,
    FaceAndEyesComponent,
    FaceAndEyesMouthComponent,
    FaceAndEyesMouthEyeBrowsComponent,
    BarchartStarterComponent,
    BarchartDataloadComponent,
    CkBarchartComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    CommonLayoutModule
  ]
})
export class CurranKellerModule { }
