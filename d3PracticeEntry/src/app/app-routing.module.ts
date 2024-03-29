import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route, Router } from '@angular/router';
import { CkBarchartComponent } from './curran-kelleher/barchart/ck-barchart/ck-barchart.component';
import { BarchartDataloadComponent } from './curran-kelleher/barchart/dataload/dataload.component';
import { BarchartStarterComponent } from './curran-kelleher/barchart/starter/starter.component';
import { CurranSmileyStarterComponent } from './curran-kelleher/smiley/curran-smiley-starter/curran-smiley-starter.component';
import { FaceAndEyesMouthEyeBrowsComponent } from './curran-kelleher/smiley/face-and-eyes-mouth-eye-brows/face-and-eyes-mouth-eye-brows.component';
import { FaceAndEyesMouthComponent } from './curran-kelleher/smiley/face-and-eyes-mouth/face-and-eyes-mouth.component';
import { FaceAndEyesComponent } from './curran-kelleher/smiley/face-and-eyes/face-and-eyes.component';
import { D3implementationComponent } from './d3implementation/d3implementation.component';
import { BindingDataComponent } from './mike-bostock/three-circles/binding-data/binding-data.component';
import { DeletingElementsComponent } from './mike-bostock/three-circles/deleting-elements/deleting-elements.component';
import { ExtraDataComponent } from './mike-bostock/three-circles/extra-data/extra-data.component';
import { SelectingElementsP2Component } from './mike-bostock/three-circles/selecting-elements-p2/selecting-elements-p2.component';
import { SelectingElementsComponent } from './mike-bostock/three-circles/selecting-elements/selecting-elements.component';

const routes: Routes = [];

const starterRoute: Route = {
  path: 'starter',
  component: D3implementationComponent
}

const markSelectorRoute: Route = {
  path: 'mike/selection',
  component: SelectingElementsComponent
}

const markSelectorTwoRoute: Route = {
  path: 'mike/selection-two',
  component: SelectingElementsP2Component
}

const markDeleteRoute: Route = {
  path: 'mike/delete',
  component: DeletingElementsComponent
}

const markBindingRoute: Route = {
  path: 'mike/binding',
  component: BindingDataComponent
}

const extraBindingRoute: Route = {
  path: 'mike/extra',
  component: ExtraDataComponent
}

const smileyStarterRoute: Route = {
  path: 'curran/smiley/starter',
  component: CurranSmileyStarterComponent
}

const faceAndEyesRoute: Route = {
  path: 'curran/smiley/faceEyes',
  component: FaceAndEyesComponent
}

const faceAndEyesMouthRoute: Route = {
  path: 'curran/smiley/faceEyesMouth',
  component: FaceAndEyesMouthComponent
}

const faceAndEyesMouthBrowsRoute: Route = {
  path: 'curran/smiley/faceEyesMouthBrows',
  component: FaceAndEyesMouthEyeBrowsComponent
}

const barcharStarterRoute: Route = {
  path: 'curran/barchart/starter',
  component: BarchartStarterComponent

}

const barchartDataLoadRoute: Route = {
  path: 'current/barchart/dataload',
  component: BarchartDataloadComponent
}

const barchartBarchartRoute: Route = {
  path: 'current/barchart/barchart',
  component: CkBarchartComponent
}

const defaultRoute: Route = {
  path: '**',
  component: D3implementationComponent
}

routes.push(starterRoute);
routes.push(markSelectorRoute);
routes.push(markSelectorTwoRoute);
routes.push(markBindingRoute);
routes.push(extraBindingRoute);
routes.push(markDeleteRoute);

routes.push(smileyStarterRoute);
routes.push(faceAndEyesRoute);
routes.push(faceAndEyesMouthRoute);
routes.push(faceAndEyesMouthBrowsRoute);

routes.push(barcharStarterRoute);
routes.push(barchartDataLoadRoute);
routes.push(barchartBarchartRoute);

routes.push(defaultRoute);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
