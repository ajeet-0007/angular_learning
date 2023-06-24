import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string= '';


  //Angular router is used for navigation after performing some actions
  constructor(private route: Router, private loginService: LoginService){
    
  }

  //SCAM => single component and module
  login(){
    if(this.loginService.Login(this.email, this.password)){
      // alert("Login Succesful")
      // this.route.navigate(['/rooms', 'add']);
      this.route.navigateByUrl('/rooms');
    }
  }
}
