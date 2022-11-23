import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  firstName: string = 'Demo';
  rollNo: number = 11223;
  todaysDate: Date = new Date();
  isIndian: boolean = false;
  //way 1 - declaration
  courseName: string;
  //way 2 - declartion + intiliazation
  courseDuration: string = '3 months';
  //way 3 inilization
  courseCandidates = 35;
  student: any;
  studetObject: any = {
    name: 'Demo',
    course:'Angular',
    duration: '3 months',
    teamSize:35
  };
  cityArray: string [] = [ 'Nagpur', 'solapur', 'mumbai'];
  rollNoList: number [];
  constructor() {
    debugger;
    this.student = new Date();
    this.rollNoList = [112,113,114,115,116];
    this.courseName ="Angular"
    this.firstName = "Demo 2";
   }

  ngOnInit(): void {
  }

}
