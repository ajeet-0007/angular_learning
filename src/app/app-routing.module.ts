import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

import { NotFoundComponent } from './not-found/not-found.component';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},

  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/rooms', pathMatch: 'full'}, //default route
  {path: '**', component: NotFoundComponent}  //wildcard route
];

//forRoot is configured once
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
