import { Component, OnInit } from '@angular/core';
import {CurrentViewFormat} from '../Controller/CurrentViewDataloader';
import { CurrentViewController} from '../Controller/CurrentViewController';
import {AngularFireDatabase} from '@angular/fire/database';

const timeTableData: CurrentViewFormat[] = [
  {
    previousSlot: {code: 'inter 12213', name: 'programming', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f1'},
    currentSlot: {code: 'inter 12213', name: 'coding', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f1'} ,
    nextSlot: {code: 'inter 2222', name: 'programming', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f2'},
  },
  {
    previousSlot: {code: 'inter 12213', name: 'programming', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f1'},
    currentSlot: {code: 'inter 12213', name: 'programming', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f2'} ,
    nextSlot: {code: 'inter 2222', name: 'programming', location: 'hall01', startingTime: '8 A.M', endingTime: '9 A.M.', floor: 'f3'},
  },
];

@Component({
  selector: 'app-current-view',
  templateUrl: './current-view.component.html',
  styleUrls: ['./current-view.component.css']
})

export class CurrentViewComponent implements OnInit {

  constructor(db: AngularFireDatabase) {
    this.time = new Date();
    const onj  = new CurrentViewController(db);

  }

  timeSlotPrevios: string;
  timeslotCurrent: string;
  timeSlotNext: string;
  time: Date;
  dataSource = timeTableData;
  displayedColumns: string[] = ['previousSlot', 'currentSlot', 'nextSlot'];

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





