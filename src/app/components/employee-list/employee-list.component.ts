import { Component, OnInit } from '@angular/core';
import { Emp } from 'src/app/classes/emp';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  isSidePanelOpen: boolean = true;
  employeeArray: Emp [] = [];
  employeeObject: Emp;//1st step
  studentObj : any = {
    studId:1,
    name:'',
    address:''
  };
  constructor() {
    this.employeeObject = new Emp(); //2nd step
    const localData = localStorage.getItem('empArr');
    if(localData!= null) {
      this.employeeArray = JSON.parse(localData);
    }
  }
  ngOnInit(): void {
  }
  showSidePanel() {
    this.isSidePanelOpen = true;

  }
  closeSidePanel() {
    this.isSidePanelOpen = false;
  }
  onSaveEmp() {
    this.employeeArray.push(this.employeeObject);
    alert('Employee Saved');

    localStorage.setItem('empArr',JSON.stringify(this.employeeArray));
  }

}
