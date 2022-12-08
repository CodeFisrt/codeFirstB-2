import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-get',
  templateUrl: './api-get.component.html',
  styleUrls: ['./api-get.component.css']
})
export class ApiGetComponent implements OnInit {
  candidates: any[] = [];
  selectedCandidate: string = '';
  canidateObj: any = {
    "CandidateId": 0,
    "Name": "",
    "ContactNo": "",
    "Email": "",
    "Password": "",
    "CreatedDate": new Date(),
    "City": "",
    "CollegeName": "",
    "Education": "",
    "BankName": "",
    "AccNo": "",
    "IfscCode": "",
    "Reference": ""
  };
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.loadCandiate();
  }
  loadCandiate() {
    this.http.get('https://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCandidates').subscribe((response: any) => {
      debugger;
      this.candidates = response.data;
    })
  }

  onSaveCandidate() {
    debugger
    this.http.post('https://onlinetestapi.gerasim.in/api/OnlineTest/AddCandidate', this.canidateObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert(res.message);
        this.loadCandiate();
      }
    })
  }
}
