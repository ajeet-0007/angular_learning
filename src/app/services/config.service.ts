import { Injectable, Inject } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import { RouteConfigToken } from './routeConfig.service';
import { RouteConfig } from './routeConfig';

@Injectable({
  providedIn: 'any'  //will create instance of service for the app & create for every lazy loaded module where it is used
})
export class ConfigService {

  constructor(@Inject(RouteConfigToken) private configToken : RouteConfig) { 
    console.log('Config Service');
    console.log(this.configToken);
  }
}
