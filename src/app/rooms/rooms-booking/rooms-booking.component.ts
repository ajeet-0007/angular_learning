import { ObserversModule } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss'],
})
export class RoomsBookingComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  id!: number;
  id$!: Observable<number>;
  ngOnInit(): void {

    this.id$ = this.router.params.pipe( map(params =>  params['roomid']))
    //  this.id = this.router.snapshot.params['roomid']
   this.router.paramMap.subscribe((params)=> console.log(params.get('roomid')));
  }
}
