import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'x';
  role = 'Admin';
  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef; //viewconatiner ref ued to dynamicaaly load a component
  // ngAfterViewInit(): void {
  //     const componentRef = this.vcr.createComponent(RoomsComponent);
  //     componentRef.instance.numberOfRooms = 50;
  // }
  @ViewChild('name', { static: true }) name!: ElementRef;
  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: Storage,
    private initService: InitService,
    private configService: ConfigService,
    private router: Router
  ) {
    console.log(initService.config);
  }
  ngOnInit(): void {
    // this.route.events.subscribe((event)=>{
    //   console.log(event);
    // })
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        console.log('Navigation Started');
      });
      //used to integrate the logics that are to be done whilw we are navigating to other for example=> loader
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log('Navigation Completed');
      });
    this.name.nativeElement.innerText = 'Hi!';
    this.loggerService?.log('AppComponent.ngOnInit!');
    this.localStorage.setItem('name', 'Hilton Hotel');
  }
}
