import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  number1: number =12;
  number2 = 12;
  result:number;
  cityName: string = '';
  cityArray: string[] = ['Mumbai'];
  constructor() {
    this.result = 0;
  }

  ngOnInit(): void {
  }
  addCity(){
    debugger;
    this.cityArray.push(this.cityName);
  }




  onAdd( ) {
    this.result = this.number1 + this.number2;
  }
  onSub() {
    this.result = this.number1 - this.number2;
  }
  onMul( ) {
    this.result = this.number1 * this.number2;
  }
  onDivide( ) {
    this.result = this.number1 / this.number2;
  }

}
