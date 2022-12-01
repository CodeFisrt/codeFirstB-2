import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  backColor: string = 'red';
  fontColor= '5px solid #17170e';
  myStyle:any = {
    color:'red',
    'font-size':'22px'
  }
  progress: number = 30;
  studentArray:any[] = [
    {
      studId:1,
      name:'Shankar',
      city: 'Nagpur',
      attendance: 30
    },
    {
      studId:2,
      name:'Rahul',
      city: 'Pune',
      attendance: 50
    },
    {
      studId:3,
      name:'Sahil',
      city: 'Mumbai',
      attendance: 90
    }
   ];
  constructor() { }

  ngOnInit(): void {
  }

}
