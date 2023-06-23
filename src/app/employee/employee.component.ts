import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'], 
  providers: [RoomsService]  //another instance of service is created
})
export class EmployeeComponent {
    // constructor(@Self() private roomsService: RoomsService){}  //Self will resolve the service here only not look up for the service
    employee: string = "John"
}
