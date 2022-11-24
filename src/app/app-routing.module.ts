import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeComponent } from './components/employee/employee.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
