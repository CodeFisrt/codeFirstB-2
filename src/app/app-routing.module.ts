import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
