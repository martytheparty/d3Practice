import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectingElementsComponent } from './selecting-elements/selecting-elements.component';
import { MatCardModule } from '@angular/material/card';
import { SelectingElementsP2Component } from './selecting-elements-p2/selecting-elements-p2.component';
import { BindingDataComponent } from './binding-data/binding-data.component';
import { ExtraDataComponent } from './extra-data/extra-data.component';
import { DeletingElementsComponent } from './deleting-elements/deleting-elements.component';



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
