import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, of, map } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, AfterViewInit, DoCheck, AfterViewChecked, OnDestroy
{
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

  stream = new Observable((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error');
  });

  title = 'Room List';

  //services => dependency injection
  constructor(private roomsService: RoomsService) {}

  @ViewChild(HeaderComponent, { static: true })
  headerComponent!: HeaderComponent; //make instance of the component
  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View!';
  }

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  ngAfterViewChecked(): void {}
  ngDoCheck(): void {
    console.log('on changes is called');
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rommms List';
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
  addRooms() {
    const room: RoomList = {
      roomNumber: 'A',
      roomType: 'Pooree Room',
      amenities: 'AC',
      price: 500,
      photos: 'k',
      checkInTime: new Date('11-nov-2022'),
      checkOutTime: new Date('11-nov-2022'),
      rating: 4.5,
    };
    this.roomsService.addRooms(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  editRooms() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Pooree Room',
      amenities: 'AC',
      price: 700,
      photos: 'k',
      checkInTime: new Date('11-nov-2022'),
      checkOutTime: new Date('11-nov-2022'),
      rating: 4.5,
    };
    this.roomsService.editRooms(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  deleteRoom() {
    this.roomsService.delete('2').subscribe((data) => {
      this.roomList = data;
    });
  }

  totalBytes = 0;

  //error proprty is created
  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  //subscription object to unsubscribe some subscription

  subscription!: Subscription;
  //catherror  used to do errot handling
  //with this no need to subscribe the data diecrtly access the data and use it as async pipein the html
  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err)=>{
      // console.log(err);
      this.error$.next(err.message);
      return of([]);
    })
  );

  roomsCount$ = this.roomsService.getRooms$.pipe(
    map((rooms) => rooms.length)
  )

  ngOnInit(): void {
    // console.log(this.roomsService.getRooms())
    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request Sucess');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes = event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }
      }
    });

    //RxJs property is used here getRooms$
    // this.subscription = this.roomsService.getRooms$.subscribe((rooms) => {
    //   this.roomList = rooms;
    // });
  }

  //code to destroy the subscribed events or unsubscribe the event
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

//ngOnInit is used in api calls
