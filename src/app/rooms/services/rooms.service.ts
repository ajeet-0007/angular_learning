import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { Environment } from '../../../environments/environment'
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';


@Injectable({
  providedIn: 'root', //simgle instance is availabe
})
export class RoomsService {
  // headers = new HttpHeaders({ token: '12345' });

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(this.config.apiEndpoint);
    console.log('Rooms Service initilaized');
  }

  //RxJs pipe property helps to modify data before we subscribe to them //getRooms$ is a prperty
  getRooms$ = this.http.get<RoomList[]>('/api/rooms', {
    // headers: this.headers
  }).pipe(shareReplay(1));

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms', {});
  }

  addRooms(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room, {
      // headers: this.headers
    });
  }

  editRooms(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }
  delete(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      { reportProgress: true }
    );
    return this.http.request(request);
  }
}

//class based providers