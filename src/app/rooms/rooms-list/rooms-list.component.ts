import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {
 
  @Input() rooms: RoomList[] | null = [];
  @Input() title: string = ''

  @Output() selectedRoom =new EventEmitter<RoomList>();

  constructor(){

  };


  ngOnInit(): void {

  }
//works on updated value nad use to modify the data
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      if(changes['name']){
        console.log(this);
        this.title = changes['title'].currentValue.toUpperCase() 
      }
  }
  selectRoom(room : RoomList){
    this.selectedRoom.emit(room);
  }

  
}
