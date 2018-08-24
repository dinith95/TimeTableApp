import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimeTableComponent} from './time-table/time-table.component';

const routes: Routes = [
  {
    path: '',
    component: TimeTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
