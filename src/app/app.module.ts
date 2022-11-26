import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { UserComponent } from './components/user/user.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { NgifComponent } from './components/ngif/ngif.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UserComponent,
    DataBindingComponent,
    CalculatorComponent,
    CreateStudentComponent,
    NgifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
