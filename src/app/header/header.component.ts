import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = "";

  constructor(private roomsService: RoomsService) {}
  ngOnInit(): void {
      
  }
}
