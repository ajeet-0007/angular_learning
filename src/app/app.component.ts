import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  title = 'x';
  role ='Admin'
  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef; //viewconatiner ref ued to dynamicaaly load a component
  // ngAfterViewInit(): void {
  //     const componentRef = this.vcr.createComponent(RoomsComponent);
  //     componentRef.instance.numberOfRooms = 50;
  // }
  @ViewChild('name', {static: true}) name! : ElementRef;
  ngOnInit(): void {
      this.name.nativeElement.innerText = "Hi!"
  }

}
