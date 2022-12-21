import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-for',
  templateUrl: './ng-if-for.component.html',
  styleUrls: ['./ng-if-for.component.css']
})
export class NgIfForComponent implements OnInit {

  isDivVisible: boolean = true;
  isDiv2Visible: boolean = true;
  cityArr = ['Pune','']
  constructor() { }

  ngOnInit(): void {
  }
  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;
    // if(this.isDiv2Visible ==true) {
    //   this.isDiv2Visible = false;
    // } else {
    //   this.isDiv2Visible = true;
    // }
  }
  hideDiv1() {
    this.isDivVisible = false;
  }
  showDiv1() {
    this.isDivVisible = true;
  }

}
