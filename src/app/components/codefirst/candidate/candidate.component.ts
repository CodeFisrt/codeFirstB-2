import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  candidatesArray: any[] = [];
  candidateObj: any ;
  constructor(private http: HttpClient) {
    this.candidateObj = { }
  }
  ngOnInit(): void {
    this.getAllCandidates();
  }
  getAllCandidates() {
    this.http.get('http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCandidates').subscribe((result:any)=>{
      this.candidatesArray = result.data;
    })
  }
  OnEdit(id: any) {
    this.http.get('https://onlinetestapi.gerasim.in/api/OnlineTest/GetCandidateById?id='+id).subscribe((result:any)=>{
      debugger;
      this.candidateObj = result.data;
    })
  }
  updateCandidate() {
    this.http.post('http://onlinetestapi.gerasim.in/api/OnlineTest/UpdateCandiadte',this.candidateObj).subscribe((result:any)=>{
      this.getAllCandidates();
    })
  }
  OnDelete(candidate: any) {
    this.http.post('http://onlinetestapi.gerasim.in/api/OnlineTest/DeleteCandidate',candidate).subscribe((result:any)=> {
      if(result.result) {
        alert(result.message);
        this.getAllCandidates();
      } else {
        alert(result.message)
      }
    })
  }

}
