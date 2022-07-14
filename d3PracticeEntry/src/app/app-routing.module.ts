import { SelectorMatcher } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { D3implementationComponent } from './d3implementation/d3implementation.component';
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

routes.push(starterRoute);
routes.push(markSelectorRoute);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
