import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-get',
  templateUrl: './api-get.component.html',
  styleUrls: ['./api-get.component.css']
})
export class ApiGetComponent implements OnInit {
  candidates: any [] = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('https://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCandidates').subscribe((response:any)=>{
      debugger;
      this.candidates = response.data;
    })
  }
}
