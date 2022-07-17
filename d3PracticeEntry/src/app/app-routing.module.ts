import { SelectorMatcher } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { D3implementationComponent } from './d3implementation/d3implementation.component';
import { SelectingElementsP2Component } from './mike-bostock/selecting-elements-p2/selecting-elements-p2.component';
import { SelectingElementsComponent } from './mike-bostock/selecting-elements/selecting-elements.component';

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

const defaultRoute: Route = {
  path: '**',
  component: D3implementationComponent
}

routes.push(starterRoute);
routes.push(markSelectorRoute);
routes.push(markSelectorTwoRoute);
routes.push(defaultRoute);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
