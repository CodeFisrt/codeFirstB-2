
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-course-master',
  templateUrl: './course-master.component.html',
  styleUrls: ['./course-master.component.css']
})
export class CourseMasterComponent implements OnInit {

  courseList: any [] = [];//create varible to store api response
  courseObject: any = {
    "CourseId": 0,
    "CourseName": "",
    "CourseDuration": "",
    "CourseBasicFees": ""
  };
  constructor(private http: HttpClient,private master: MasterService) { } //create obuject of httpClinet

  ngOnInit(): void {
    this.loadData(); //called function to load records
  }

  loadData() {
    this.http.get('http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCourseList').subscribe((result: any)=>{
      this.courseList = result.data;//storing data we have got from API
    })
  }
  onSaveCourse() {
    debugger;
    this.master.saveCourse(this.courseObject).subscribe((result: any)=>{
      if(result.result) {
        this.loadData();
        alert(result.message);
      } else {
        alert(result.message);
      }
    })
  }

}
