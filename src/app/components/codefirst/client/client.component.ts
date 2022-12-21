import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clinetTabs = ['Basic Details', 'Contact Details','Address'];
  alertText= "Clinet Page loaded Success";
  clientArray: any[] = [];
  clientObj: any = {
    "clientId": 0,
    "clientName": "",
    "businessName": "",
    "contactPerson": "",
    "contactNo": "",
    "altContactNo": "",
    "email": "",
    "createdDate":  new Date(),
    "logo": ""
  };
  constructor(private http: HttpClient,private master:MasterService) { }

  ngOnInit(): void {
    this.loadClinets();
    this.loadCandidate();
  }

  loadCandidate() {
    debugger;
    this.master.getAllCandidates().subscribe((res: any)=>{
      debugger;
    })
  }
  loadClinets() {
    this.http.get('http://onlinetestapi.gerasim.in/api/GetValet/GetAllClients').subscribe((res: any) => {
      this.clientArray = res.data;
    })
  }
  onSaveClient() {
    this.http.post('http://onlinetestapi.gerasim.in/api/GetValet/addClient',this.clientObj).subscribe((res:any)=> {
      if(res.result) {
        alert("Client Saved");
        this.loadClinets();
      } else {
        alert(res.message);
      }
    })
  }
  onEdit(item:any) {
    this.clientObj = item;
  }

  onUpdateClient() {
    this.http.post('http://onlinetestapi.gerasim.in/api/GetValet/updateClient',this.clientObj).subscribe((res:any)=> {
      if(res.result) {
        alert("Client Updated");
        this.loadClinets();
      } else {
        alert(res.message);
      }
    })
  }
  onDelete(id: number) {
   this.master.deleteClient(id).subscribe((res:any)=> {
      if(res.result) {
        alert("Client Deleted");
        this.loadClinets();
      } else {
        alert(res.message);
      }
    })
  }
}
