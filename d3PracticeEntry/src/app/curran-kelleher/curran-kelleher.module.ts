import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurranSmileyStarterComponent } from './smiley/curran-smiley-starter/curran-smiley-starter.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CurranSmileyStarterComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class CurranKellerModule { }
