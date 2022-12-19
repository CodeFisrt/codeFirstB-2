import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

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
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadClinets();
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
    this.http.post('http://onlinetestapi.gerasim.in/api/GetValet/deleteClient?id='+id,'').subscribe((res:any)=> {
      if(res.result) {
        alert("Client Deleted");
        this.loadClinets();
      } else {
        alert(res.message);
      }
    })
  }
}
