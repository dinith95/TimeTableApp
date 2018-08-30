import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeTableComponent } from './time-table/time-table.component';

import {MatCardModule,
        MatTableModule,


} from '@angular/material';
import { CurrentViewComponent } from './current-view/current-view.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeTableComponent,
    CurrentViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
