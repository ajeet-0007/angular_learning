import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

import { NotFoundComponent } from './not-found/not-found.component';

import { LoginComponent } from './login/login.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent, canActivate: [loginGuard] },
  {
    path: 'rooms',
    loadChildren: () =>
      import('./rooms/rooms.module').then((m) => m.RoomsModule),
  }, //lazy loading
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/rooms', pathMatch: 'full' }, //default route
  {
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingModule),
  },
  { path: '**', component: NotFoundComponent }, //wildcard route
];

//forRoot is configured once
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
