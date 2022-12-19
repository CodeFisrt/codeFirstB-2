import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-place-holder',
  templateUrl: './json-place-holder.component.html',
  styleUrls: ['./json-place-holder.component.css']
})
export class JsonPlaceHolderComponent implements OnInit {

  users: any[] = [];
  usrObj: any = {
    "id": 1,
    "name": "",
    "username": "",
    "email": "",
  };
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      this.users = res;
    })
  }
  onSave() {
    this.http.post('https://jsonplaceholder.typicode.com/users', this.usrObj).subscribe((res: any) => {
    })
  }
  onUpdate() {
    this.http.put('https://jsonplaceholder.typicode.com/users/1', this.usrObj).subscribe((res: any) => {
    })
  }
  onDelete(id: number) {
    this.http.delete('https://jsonplaceholder.typicode.com/users/' + id).subscribe((res: any) => {
    })
  }
}
