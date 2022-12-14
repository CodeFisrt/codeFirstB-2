import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  firstName: string = 'Demo';
  inputType: string = 'checkbox';
  placeHolderText = 'Enter Name';
  teztBoxId= 'txtMyName';
  pColor = 'text-primary';
  courseName:string = 'React';
  empName:string;
  empCity: string;
  rollno:number = 123;
  isIndian: boolean = true;
  gender: string = 'female';

  constructor() {
    this.selectedCity = 'Mumbai';
    this.empCity = 'Nagpur';
    this.empName = 'Shankar';
  }

  ngOnInit(): void {
  }
  minLength: number = 3;
  selectedCity: string;
  onDecrement() {
     debugger;
     this.minLength --;
  }
  onIncrement() {
    this.minLength ++;
    debugger;
  }
  onCityChange(event:any) {
    debugger;
    this.selectedCity = event.target.value;
  }

}
