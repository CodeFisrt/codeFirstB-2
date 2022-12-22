import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.css']
})
export class UserTaskComponent implements OnInit {
  user: any[];
  userObj = {
    id: 0,
    name: '',
    email: '',
    status: '',
    gender: ''
  }
  constructor(private ser: MasterService) {
    this.user = [];
   }

  ngOnInit(): void {

  }
  getAllUsers() {
   this.ser.getUser().subscribe((res: any) => {

   if(res) {
    this.user = res;
   }
   })
  }
  onSave() {
    debugger
   this.ser.createUser(this.userObj).subscribe((res: any) =>{
    alert("User added.")
    this.getAllUsers();
   })
  }
}
