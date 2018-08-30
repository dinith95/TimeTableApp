import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimeTableComponent} from './time-table/time-table.component';
import {CurrentViewComponent} from './current-view/current-view.component';

const routes: Routes = [
  {
    path: '',
    component: TimeTableComponent
  },
  {
    path: 'current',
    component: CurrentViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
