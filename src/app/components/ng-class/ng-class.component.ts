import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  div1Class:string = 'bg-primary';
  isIndian: boolean = true;
  isSidePanelOpen:boolean = true;
  bgColorArray:string [] = ['bg-primary','bg-danger','bg-secondary','bg-success','bg-info'];
  selectedColor: string = '';
  studentArray:any[] = [
    {
      studId:1,
      name:'Shankar',
      city: 'Nagpur',
      isIndian: false,
      gender:'male'
    },
    {
      studId:2,
      name:'aditi',
      city: 'Pune',
      isIndian: true,
      gender:'female'
    },
    {
      studId:3,
      name:'Sahil',
      city: 'Mumbai',
      isIndian: false,
      gender:'male'
    }
   ];

  constructor() {

   }

  ngOnInit(): void {
  }

}
