import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  //you can remove the providedIn prperty and use the optional property in the instantiation of service
})
export class LoggerService {
  constructor() {}
  log(msg: string) {
    console.log(msg);
  }
}
