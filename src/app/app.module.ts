import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { UserComponent } from './components/user/user.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { NaPipe } from './pipes/na.pipe';
import { MyPipePipe } from './pipes/my-pipe.pipe';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { TemplateComponent } from './components/template/template.component';
import { ApiGetComponent } from './components/api-get/api-get.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CourseMasterComponent } from './components/codefirst/course-master/course-master.component';
import { EnquiryComponent } from './components/codefirst/enquiry/enquiry.component';
import { CandidateComponent } from './components/codefirst/candidate/candidate.component';
import { ClientComponent } from './components/codefirst/client/client.component';
import { JsonPlaceHolderComponent } from './components/codefirst/json-place-holder/json-place-holder.component';
import { DataBindingReviseComponent } from './components/revise/data-binding-revise/data-binding-revise.component';
import { AlertComponent } from './resuable/alert/alert.component';
import { ProgressBarComponent } from './resuable/progress-bar/progress-bar.component';
import { NgIfForComponent } from './components/revise/ng-if-for/ng-if-for.component';
import { MyButtonComponent } from './resuable/my-button/my-button.component';
import { TabsComponent } from './resuable/tabs/tabs.component';
import { UserTaskComponent } from './components/user-task/user-task.component';
import { HttpInterceptors } from './services/http.interceptor';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from './services/guards/auth.guard';
import { ReactiveFromComponent } from './components/reactive-from/reactive-from.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UserComponent,
    DataBindingComponent,
    CalculatorComponent,
    CreateStudentComponent,
    NgifComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    PipesComponent,
    NaPipe,
    MyPipePipe,
    UserRegistrationComponent,
    CreateProductComponent,
    ProductListComponent,
    EmployeeListComponent,
    TemplateComponent,
    ApiGetComponent,
    CourseMasterComponent,
    EnquiryComponent,
    CandidateComponent,
    ClientComponent,
    JsonPlaceHolderComponent,
    DataBindingReviseComponent,
    AlertComponent,
    ProgressBarComponent,
    NgIfForComponent,
    MyButtonComponent,
    TabsComponent,
    UserTaskComponent,
    LoginComponent,
    LayoutComponent,
    ReactiveFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
