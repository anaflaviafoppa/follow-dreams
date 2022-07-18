import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './views/pages/main/main.component';

export enum Route {
  MAIN= 'main'
}

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
