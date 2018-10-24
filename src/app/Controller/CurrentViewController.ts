// import { environment } from '../../environments/environment';
import {AngularFireDatabase} from '@angular/fire/database';
// import {equal} from "assert";



export  class CurrentViewController {
  // var database ;
  output: object[] = [];
  db: object ;
  date: String = '';
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
    let prevTimeHrs = time.getHours() - 1 ;
    let nextTimeHrs = time.getHours() + 1   ;
    if (prevTimeHrs === -1) {
      prevTimeHrs = 24 ;
    }
    if ( nextTimeHrs === 24) {
      nextTimeHrs = 0;
    }
    const prevTimeStr = prevTimeHrs + ':' + time.getMinutes();
    const nowTimeStr = time.getHours() + ':' + time.getMinutes();
    const  nextTimeStr = nextTimeHrs + ':' + time.getMinutes();
    console.log(prevTimeStr);
    console.log(nowTimeStr);
    console.log(nextTimeStr);
    this.getLectureTimeDetails(prevTimeStr);
  }
  getLectureTimeDetails(timeStr) {
    console.log(timeStr);
    this.db.list('/' + this.date , ref => ref.orderByChild('startTime').endAt('08:30'))
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
  }
}
