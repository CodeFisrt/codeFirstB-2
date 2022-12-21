import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiGetComponent } from './components/api-get/api-get.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CandidateComponent } from './components/codefirst/candidate/candidate.component';
import { ClientComponent } from './components/codefirst/client/client.component';
import { CourseMasterComponent } from './components/codefirst/course-master/course-master.component';
import { EnquiryComponent } from './components/codefirst/enquiry/enquiry.component';
import { JsonPlaceHolderComponent } from './components/codefirst/json-place-holder/json-place-holder.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { DataBindingReviseComponent } from './components/revise/data-binding-revise/data-binding-revise.component';
import { NgIfForComponent } from './components/revise/ng-if-for/ng-if-for.component';
import { TemplateComponent } from './components/template/template.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'emp',
    component: EmployeeComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
   {
    path:'Data-Binding',
    component: DataBindingComponent
  },
  {
    path:'calculator',
    component: CalculatorComponent
  },
  {
    path:'createStudent',
    component: CreateStudentComponent
  },
  {
    path:'ng-if',
    component: NgifComponent
  },
  {
    path:'ng-for',
    component: NgForComponent
  },
  {
    path:'ng-class',
    component: NgClassComponent
  },
  {
    path:'ng-style',
    component: NgStyleComponent
  },
  {
    path:'pipe',
    component: PipesComponent
  },
  {
    path:'users',
    component: UserRegistrationComponent
  },
  {
    path:'create-Product',
    component: CreateProductComponent
  },
  {
    path:'product-List',
    component: ProductListComponent
  },
  {
    path:'emp-List',
    component: EmployeeListComponent
  },
  {
    path:'template',
    component: TemplateComponent
  },
  {
    path:'get-api',
    component: ApiGetComponent
  },
  {
    path:'Course',
    component: CourseMasterComponent
  },
  {
    path:'enquiry',
    component: EnquiryComponent
  },
  {
    path:'candidate',
    component: CandidateComponent
  },
  {
    path:'client',
    component: ClientComponent
  },
  {
    path:'json',
    component: JsonPlaceHolderComponent
  },
  {
    path:'DataBindig2',
    component: DataBindingReviseComponent
  }
  ,
  {
    path:'ngIfFor',
    component: NgIfForComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
