import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  isDiv2Visible : boolean = true;
  isDiv3Visible: boolean = false;
  name: string = 'shankar';
  surname: string = 'shankar';
  studentObj : any = {
    name: 'Shankr',
    isStudShow: true
  };
  constructor() { }
  ngOnInit(): void {
  }
  hideDiv2() {
     this.isDiv2Visible = false;
  }
  showDiv2() {
     this.isDiv2Visible = true;
  }
  toggleDiv3() {
    // if(this.isDiv3Visible ==false) {
    //   this.isDiv3Visible = true;
    // } else {
    //   this.isDiv3Visible = false;
    // }
    this.isDiv3Visible = ! this.isDiv3Visible;
  }

}
