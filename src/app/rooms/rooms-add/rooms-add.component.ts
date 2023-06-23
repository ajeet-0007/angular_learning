import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss'],
})
export class RoomsAddComponent {
  room: RoomList = {
    roomType: '',
    amenities: '',
    checkInTime: new Date(),
    checkOutTime: new Date(),
    price: 0,
    photos: '',
    rating: 0,
  };

  successMessage: string = '';
  constructor(private roomService: RoomsService) {}
  AddRoom(roomsForm: NgForm) {
    this.roomService.addRooms(this.room).subscribe((data) => {
      this.successMessage = 'Room Added!';
      roomsForm.reset({
        roomType: '',
        amenities: '',
        checkInTime: new Date(),
        checkOutTime: new Date(),
        price: 0,
        photos: '',
        rating: 0,
      });
    });
  }
}
