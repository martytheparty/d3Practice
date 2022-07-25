import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectingElementsComponent } from './three-circles/selecting-elements/selecting-elements.component';
import { SelectingElementsP2Component } from './three-circles/selecting-elements-p2/selecting-elements-p2.component';
import { BindingDataComponent } from './three-circles/binding-data/binding-data.component';
import { DeletingElementsComponent } from './three-circles/deleting-elements/deleting-elements.component';
import { ExtraDataComponent } from './three-circles/extra-data/extra-data.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    SelectingElementsComponent,
    SelectingElementsP2Component,
    BindingDataComponent,
    ExtraDataComponent,
    DeletingElementsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class MikeBostockModule { }
