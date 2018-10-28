// import { environment } from '../../environments/environment';
import {AngularFireDatabase} from '@angular/fire/database';
import lecture, {default as Lecture} from './Lecture';
// import {equal} from "assert";



export  class CurrentViewController {
  // var database ;
  output: Lecture[] = [] ;
  db: object ;
  date: number ;
  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.date = new Date().getDay();
    console.log(this.date);
    // db.list('/Friday',
    //     ref => ref.orderByChild('floor').equalTo('02'))
    //   .valueChanges().subscribe((data) => {
    //   console.log(data);
    // });

  }

  getLectureShedule() {
    const time = new Date();

    let prevTimeStart = time.getHours() - 1 ;
    let nextTimeStart = time.getHours() + 1   ;
    if (prevTimeStart === -1) {
      prevTimeStart = 24 ;
    }
    if ( nextTimeStart === 24) {
      nextTimeStart = 0;
    }
    const prevTimeStartStr = prevTimeStart + ':00' ;
    const nowTimeStartStr = time.getHours() + ':00';
    const  nextTimeStartStr = nextTimeStart + ':00';
    console.log(prevTimeStartStr);
    console.log(nowTimeStartStr);
    console.log(nextTimeStartStr);
    this.getTimeLecs(prevTimeStartStr , nowTimeStartStr);
  }
  getTimeLecs( timeStart , timeEnd) {
    this.output.length = 0;
    console.log(timeStart);
    console.log(timeEnd);
    // to get the lectures which started during that period or continuing from previous periods
    this.db.list('/' + this.date , ref => ref.orderByChild('startTime').endAt('08:00'))
      .valueChanges().subscribe(data => {
      data.forEach(d => {
        if (d.endTime > '08:30' ) {
          this.output.push(d);
          // console.log(d);
        }
        // console.log(d.endTime);
      });
      // this.output.forEach(op => {
      //   console.log('output' + op.startTime);
      // });

      console.log(data);
    });
    return this.output;
    // getPreviousLectures(timeStr)
  }
}
