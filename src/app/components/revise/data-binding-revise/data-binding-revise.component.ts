import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-revise',
  templateUrl: './data-binding-revise.component.html',
  styleUrls: ['./data-binding-revise.component.css']
})
export class DataBindingReviseComponent implements OnInit {

  name: string = "Demo";
  inputType="checkbox";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(param: string) {
    alert(param)
  }

}
