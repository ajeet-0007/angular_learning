import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 30,
    availableRooms: 10,
    bookedRooms: 5,
  };
  selectedRoom!: RoomList;
  roomList: RoomList[] = [];
  title = 'Room List'
  constructor() {}
  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'AC',
        price: 500,
        photos: 'k',
        checkInTime: new Date('11-nov-2022'),
        checkOutTime: new Date('11-nov-2022'),
        rating: 4.5,
      },
      {
        roomNumber: 1,
        roomType: 'Pooe Room',
        amenities: 'AC',
        price: 500,
        photos: 'k',
        checkInTime: new Date('11-nov-2022'),
        checkOutTime: new Date('11-nov-2022'),
        rating: 4.5,
      },
      {
        roomNumber: 1,
        roomType: 'Pooree Room',
        amenities: 'AC',
        price: 500,
        photos: 'k',
        checkInTime: new Date('11-nov-2022'),
        checkOutTime: new Date('11-nov-2022'),
        rating: 4.5,
      },
    ];
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rommms List"
  }
  selectRoom(room: RoomList){
    this.selectedRoom = room;
  }
  addRooms(){
    const room: RoomList = {
      roomNumber: 1,
      roomType: 'Pooree Room',
      amenities: 'AC',
      price: 500,
      photos: 'k',
      checkInTime: new Date('11-nov-2022'),
      checkOutTime: new Date('11-nov-2022'),
      rating: 4.5,
    };
    this.roomList = [...this.roomList, room];
  }
}

//ngOnInit is used in api calls