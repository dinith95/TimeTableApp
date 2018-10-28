import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChangeDetectorRef, NgModule} from '@angular/core';
import {Router} from '@angular/router';
// import  angular.module('myModule', ['ds.clock']);
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
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
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private  router: Router) {

    // setInterval(function () {
    //
    //   router.navigate(['current']);
    //
    // }, 4000);
    // setInterval( function () {
    //   router.navigate(['']);
    // }, 8000);
  }
}
