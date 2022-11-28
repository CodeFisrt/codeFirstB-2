import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  cityList: string [] = ['Mumbai','Nagpur','Delhi',
  'Bhopal','Jabalpur','solapur'];

  rollNoArray: number[]= [];
  selectedStudent:string ='';
  studentArray:any[] = [
    {
      studId:1,
      name:'Shankar',
      city: 'Nagpur',
      isIndian: false
    },
    {
      studId:2,
      name:'Rahul',
      city: 'Pune',
      isIndian: true
    },
    {
      studId:3,
      name:'Sahil',
      city: 'Mumbai',
      isIndian: false
    }
   ];

  constructor() {
    this.rollNoArray = [111,112,113,114,115,
      116,117,118];
   }

  ngOnInit(): void {
  }

}
