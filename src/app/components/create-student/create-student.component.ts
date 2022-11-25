import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  studentObj = {
    name:'',
    contact:'',
    city:'Nagpur',
    state:'',
    country:'',
    address:'',
    isIndian: true,
    gender: ''
  };
  constructor() { }

  ngOnInit(): void {
  }
  onSaveStudent() {
    debugger;
    const formData = this.studentObj;
  }

}
