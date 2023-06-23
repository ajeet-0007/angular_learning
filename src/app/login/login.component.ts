import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string= '';


  //Angular router is used for navigation after performing some actions
  constructor(private route: Router){
    
  }

  //SCAM => single component and module
  login(){
    if(this.email==="admin@gmail.com" && this.password==='Admin'){
      // alert("Login Succesful")
      // this.route.navigate(['/rooms', 'add']);
      this.route.navigateByUrl('/rooms/add');
    }
  }
}
