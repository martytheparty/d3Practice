import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { D3implementationComponent } from './d3implementation/d3implementation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MikeBostockModule } from './mike-bostock/mike-bostock.module';
import { CurranKellerModule } from './curran-kelleher/curran-kelleher.module';
import { CommonLayoutModule } from './common/common/common-layout.module';

@NgModule({
  declarations: [
    AppComponent,
    D3implementationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MikeBostockModule,
    CurranKellerModule,
    CommonLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
