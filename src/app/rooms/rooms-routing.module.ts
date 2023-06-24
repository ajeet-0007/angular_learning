import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';

const routes: Routes = [
  {
    path: '', //lazy loading
    component: RoomsComponent,
    children: [
      { path: 'add', component: RoomsAddComponent },
      { path: ':roomid', component: RoomsBookingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
