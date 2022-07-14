import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectingElementsComponent } from './selecting-elements/selecting-elements.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    SelectingElementsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class MikeBostockModule { }
