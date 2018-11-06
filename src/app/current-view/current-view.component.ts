import { Component, OnInit } from '@angular/core';
import {CurrentViewFormat} from '../Controller/CurrentViewDataloader';
import { CurrentViewController} from '../Controller/CurrentViewController';
import {AngularFireDatabase} from '@angular/fire/database';


//

@Component({
  selector: 'app-current-view',
  templateUrl: './current-view.component.html',
  styleUrls: ['./current-view.component.css']
})

export class CurrentViewComponent implements OnInit {
  // timeTableData: CurrentViewFormat[] = [
  //   {
  //     previousSlot: {code: 'inter 12213', name: 'programming', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f1'},
  //     currentSlot: {code: 'inter 12213', name: 'coding', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f1'} ,
  //     nextSlot: {code: 'inter 2222', name: 'programming', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f2'},
  //   },
  //   {
  //     previousSlot: {code: 'inter 12213', name: 'programming', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f1'},
  //     currentSlot: {code: 'inter 12213', name: 'programming', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f2'} ,
  //     nextSlot: {code: 'inter 2222', name: 'programming', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f3'},
  //   },
  // ];
  timeTableData: CurrentViewFormat = [];
// previousSlotInfo: object[] = [
//   {
//     code: 'inter 12213', name: 'programming', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f1'
//   },
//   {
//     code: 'inter 12213', name: 'programming', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f1'
//   }
// ];
// currentSlotInfo: object[] = [
//   {
//     code: 'inter 12213', name: 'coding', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f1'
//   },
//   {
//     code: 'inter 12213', name: 'programming', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f2'
//   }
// ];
// nextSlotInfo: object[] = [
//   {
//     code: 'inter 2222', name: 'programming', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f2'
//   },
//   {
//     code: 'inter 2222', name: 'programming', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f3'
//   }
// ];
// timeTableData: object[] = [
//     this.previousSlotInfo,
//     this.currentSlotInfo,
//     this.nextSlotInfo
// ];
  constructor(db: AngularFireDatabase) {
    this.time = new Date();
    // this.CurrentViewController  = new CurrentViewController(db);
    // this.CurrentViewController.getLectureDetails();
    this.database = db;
    new CurrentViewController(this.database).getLectureShedule((data)=>{
      console.log('time table data ' + data);
      this.timeTableData = data;
    });
    console.log('time table data ' + this.timeTableData);

  }
  database: object ;
  timeSlotPrevios: string;
  timeslotCurrent: string;
  timeSlotNext: string;
  time: Date;
  dataSource = this.timeTableData;
  displayedColumns: string[] = ['previousSlot', 'currentSlot', 'nextSlot'];
  // displayedColumns: string[] = ['previousSlot'];
  ngOnInit() {
    let time;
    let startTime: string;
    let endTime: string;
    //
    // setting the previous time
    time = this.time.getHours() - 1;
    if (time < 12) {
      startTime = time + ' A.M.';
      endTime = (time + 1) + ' A.M.';
    } else if (time === 12) {
      startTime = time + 'noon';
      endTime = '1 P.M.';
    } else {
      startTime = (time - 12) + ' P.M.';
      endTime = (time - 11) + ' P.M.';
    }
    this.timeSlotPrevios = startTime + ' - ' + endTime;

    //
    // setting the current time
    time = this.time.getHours();
    if (time < 12) {
      startTime = time + ' A.M.';
      endTime = (time + 1) + ' A.M.';
    } else if (time === 12) {
      startTime = time + 'noon';
      endTime = '1 P.M.';
    } else {
      startTime = (time - 12) + ' P.M.';
      endTime = (time - 11) + ' P.M.';
    }
    this.timeslotCurrent = startTime + ' - ' + endTime;

    //
    // setting the next time
    time = this.time.getHours() + 1;
    if (time < 12) {
      startTime = time + ' A.M.';
      endTime = (time + 1) + ' A.M.';
    } else if (time === 12) {
      startTime = time + ' noon';
      endTime = '1 P.M.';
    } else {
      startTime = (time - 12) + ' P.M.';
      endTime = (time - 11) + ' P.M.';
    }
    this.timeSlotNext = startTime + ' - ' + endTime;



  }
  }





