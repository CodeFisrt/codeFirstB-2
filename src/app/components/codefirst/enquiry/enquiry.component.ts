import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  enquiryList: any[] = [];
  enquiryObject: any = {
    "EnqiryId": 0,
    "Name": "",
    "IsRead": false,
    "ContactNo": "",
    "Email": "",
    "Query": ""
  };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadEnquiries();
  }

  loadEnquiries() {
    this.http.get('http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllEnquiryMaster').subscribe((result: any) => {
      this.enquiryList = result.data;
    })
  }

  onSaveEnquiry() {
    this.http.post('http://onlinetestapi.gerasim.in/api/OnlineTest/AddEnquiryMaster', this.enquiryObject).subscribe((res: any)=> {
      this.loadEnquiries();
    })
  }

}
