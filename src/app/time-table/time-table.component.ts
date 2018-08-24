import { Component, OnInit } from '@angular/core';
import {PeriodicElement} from '../Controller/DataLoader';
import {Time} from "@angular/common";
// export interface PeriodicElement {
//   hall: string;
//   t8to9: string;
//   t9to10: string;
//   t10to11: string;
//   t11to12: string;
//
// }
// the data is put into data structure as in the table
// lator assigned to the datasource
const ELEMENT_DATA: PeriodicElement[] = [
  {hall: '1', t8to9: 'sub1a', t9to10: 'sub2a' , t10to11: 'sub3a', t11to12: 'sub4a' , t13to14: 'sub5a', floor: 'f1'},
  {hall: '2', t8to9: 'sub1b', t9to10: 'sub2b' , t10to11: 'sub3b', t11to12: 'sub4b', t13to14: 'sub5b', floor: 'f2' },
];
@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {
  months: string[] = new Array('January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December');
  weekdays: string[] = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  constructor() {
    this.date = new Date();
  }
  time: Date;
  date: Date;
  todayDate: string;
  todayTime: string;
  dataSource = ELEMENT_DATA ;
  displayedColumns: string[] = ['Hall', 't8to9', 't9to10' , 't10to11' , 't11to12' , 't13to14'];

  ngOnInit() {
    this.todayDate = this.months[this.date.getMonth()] + ' ' + this.date.getDate() + ', '
      + this.weekdays[this.date.getDay()];
    this.todayTime = this.date.getHours() + ' : ' + this.date.getMinutes() + ' : ' + this.date.getSeconds();
  }

  private timer(): void {
    this.time = new Date();
    this.todayTime = this.time.getHours() + ' : ' + this.time.getMinutes() + ' : ' + this.time.getSeconds();
    setTimeout(this.timer(), 1000);
  }

}
