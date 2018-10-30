// import { environment } from '../../environments/environment';
import {AngularFireDatabase} from '@angular/fire/database';
import lecture, {default as Lecture} from './Lecture';
import {combineAll} from "rxjs/internal/operators";
import {async} from "@angular/core/testing";
// import
// import {equal} from "assert";



export  class CurrentViewController {
  // var database ;
  output: Lecture[] = [] ;
  previousData: Lecture[] = [];
  currentData: Lecture[] =[];
  nextData: Lecture[] = [];
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
    let nextTimeEnd = time.getHours() + 2;
    if (prevTimeStart === -1) {
      prevTimeStart = 24 ;
    }
    if ( nextTimeStart >= 24) {
      nextTimeStart = 0;
    }
    if (nextTimeEnd >= 24) {
      nextTimeEnd = nextTimeEnd - 24 ;
    }

    const prevTimeStartStr = prevTimeStart + ':00' ;
    const nowTimeStartStr = time.getHours() + ':00';
    const  nextTimeStartStr = nextTimeStart + ':00';
    console.log(prevTimeStartStr);
    console.log(nowTimeStartStr);
    console.log(nextTimeStartStr);
    this.getTimeLecs(prevTimeStartStr , nowTimeStartStr,).then((result) => {
      // console.log(result);
      this.previousData = result;
      this.getTimeLecs(nowTimeStartStr, nextTimeStartStr).then((resultCurr) => {
        this.currentData = resultCurr;
        this.getTimeLecs(nextTimeStartStr , nextTimeEnd ).then((resultNext) => {
          this.nextData = resultNext;
          console.log(this.previousData);
          console.log(this.currentData);
          // this.createDataSet();
          const maxNum: number = Math.max(this.previousData.length , this.currentData.length , this.nextData.length);
          console.log(maxNum);
        });
      });
    });
    // finalFunction();
  }

  f1( para ){
    console.log(para);
    this.getTimeLecs(sds,dsds,f2)
  }

  f2(para){
    console.log()
  }
  async getTimeLecs( timeStart , timeEnd,callback ) {
    // this.output.length = 0;
    const output = [];
    console.log(timeStart);
    console.log(timeEnd);
    // to get the lectures which started during that period or continuing from previous periods
    this.db.list('/' + '1' , ref => ref.orderByChild('startTime').endAt('09:00'))
      .valueChanges().subscribe(data => {

      data.forEach(d => {
        if (d.endTime > '08:00' ) {
          output.push(d);
          // console.log(d);
        }
        // console.log(d.endTime);
      });
      callback(x);
      // this.output.forEach(op => {
      //   console.log('output' + op.startTime);
      // });

      console.log(output);
      // return output;
    })
    return output;
    // getPreviousLectures(timeStr)
  }

  createDataSet(){

    for (var i = 0 ; i < maxNum; i++) {

    }
  }
}
