import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  candidateTabs = ['Registration', 'Invoice','Billing'];
  candidatesArray: any[] = [];
  candidateObj: any ;
  constructor(private http: HttpClient,
    private master : MasterService) {
    this.candidateObj = { }
  }
  ngOnInit(): void {
    this.getAllCandidates();
    const year = this.master.getCurrentYear();
    const name = this.master.apiName;
    debugger;
  }




  onMyBtnClicked() {
    alert('child button clicked');
  }





  getAllCandidates() {
    debugger;
    this.master.getAllCandidates().subscribe((result:any)=>{
      debugger;
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
