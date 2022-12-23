import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj: any = {
    username: '',
    password:''
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onLogin() {
    if(this.loginObj.username == "admin" && this.loginObj.password == "admin@123") {
      localStorage.setItem('username',
      this.loginObj.username);
      this.router.navigateByUrl("calculator");
    } else {
      alert("wrong credentials")
    }
  }

}
