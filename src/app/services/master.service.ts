import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiName= "Demo";
  constructor(private http: HttpClient) { }

  getAllCandidates(): Observable<any[]> {
   return this.http.get<any[]>("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCandidates");
  }
  getCurrentYear() {
    const todays = new Date()
    return todays.getFullYear();
  }
  saveCourse(obj:any): Observable<any> {
    debugger;
   return  this.http.post<any>("http://onlinetestapi.gerasim.in/api/OnlineTest/AddCourse",obj);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.post("http://onlinetestapi.gerasim.in/api/GetValet/deleteClient?id="+ id,'');
  }
}
