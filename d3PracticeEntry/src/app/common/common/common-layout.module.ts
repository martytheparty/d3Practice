import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class CommonLayoutModule { }
