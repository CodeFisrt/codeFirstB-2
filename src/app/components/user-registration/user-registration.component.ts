import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user: any = {
    name:'',
    city:'',
    contact:'',
    isIndian: false,
    bgColor: ''
  };
  users: any [] = [];
  constructor() { }
  ngOnInit(): void {
    const localData = localStorage.getItem('userList');
    if (localData!=null) {
      this.users = JSON.parse(localData);
    }
  }
  addUser() {
    this.users.push(this.user);
    localStorage.setItem('userList', JSON.stringify(this.users))
    this.resetForm();
  }
  removeUser(index: number) {
    this.users.splice(index,1);
    localStorage.setItem('userList', JSON.stringify(this.users));
  }
  resetForm() {
    this.user = {
      name:'',
      city:'',
      contact:'',
      isIndian: false,
      bgColor: ''
    };
  }

}
