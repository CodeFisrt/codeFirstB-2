import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  isSidePanelOpen: boolean = true;
  employeeArray: any [] = [];
  employeeObject: any = {
    empName: '',
    empId: '',
    address: '',
    city: '',
    contact:'',
    dept:''
  };
  constructor() {
    const localData = localStorage.getItem('empArr');
    if(localData!= null) {
      this.employeeArray = JSON.parse(localData);
    }
  }
  ngOnInit(): void {
  }
  showSidePanel() {
    this.isSidePanelOpen = true;
    this.employeeObject = {
      empName: '',
      empId: '',
      address: '',
      city: '',
      contact:'',
      dept:''
    };
  }
  closeSidePanel() {
    this.isSidePanelOpen = false;
  }
  onSaveEmp() {
    this.employeeArray.push(this.employeeObject);
    alert('Employee Saved');
    this.employeeObject = {
      empName: '',
      empId: '',
      address: '',
      city: '',
      contact:'',
      dept:''
    };
    localStorage.setItem('empArr',JSON.stringify(this.employeeArray));
  }

}
