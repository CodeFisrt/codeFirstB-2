import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NgifComponent } from './components/ngif/ngif.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
