import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurranSmileyStarterComponent } from './smiley/curran-smiley-starter/curran-smiley-starter.component';
import { MatCardModule } from '@angular/material/card';
import { FaceAndEyesComponent } from './smiley/face-and-eyes/face-and-eyes.component';

@NgModule({
  declarations: [
    CurranSmileyStarterComponent,
    FaceAndEyesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class CurranKellerModule { }
