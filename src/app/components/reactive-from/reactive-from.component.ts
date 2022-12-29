import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.css']
})
export class ReactiveFromComponent implements OnInit {

  studentObjh :any = {
    name:'',
    city:'',
    family: {
      mother:'',
      father:'',
      contact:''
    }
  }
  userForm: FormGroup;
  constructor() {
    this.userForm = new FormGroup({
      username: new FormControl("",[Validators.required,
        Validators.minLength(4)]),
      password: new FormControl('',[Validators.maxLength(5),
        Validators.required]),
      city: new FormControl(),
      state: new FormControl(),
      family: new FormGroup({
        motherName:  new FormControl(),
        fatherName: new FormControl()
      })
    });
  }
  ngOnInit(): void {
  }
  onUserSave() {
    debugger;
    const formValue = this.userForm.value;
    if(this.userForm.invalid){
    }
  }
  ClearForm() {
    debugger;
    this.userForm.reset();
  }

}


export class student {
  name: string;
  city: string;
  familyDetail: family;
  constructor() {
    this.city = '';
    this.name = '';
    this.familyDetail = new family()
  }
}
export class family {
  parentName: string;
  constructor(){
    this.parentName =''
  }
}
