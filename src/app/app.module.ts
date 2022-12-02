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
    EmployeeListComponent
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
