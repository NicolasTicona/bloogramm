import { Component, OnInit } from '@angular/core';
import { AutenticationService } from '../servicios/autentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email: any = false;

  constructor(private autenticationService: AutenticationService) { }

  ngOnInit() {
  }

  Email(){
    this.email = this.autenticationService.getEmailUser();
    console.log(this.email);
    return this.email;
  }

  isAuth(){
    return this.autenticationService.isAuthenticated();
  }

  LogOut(){
    this.autenticationService.LogOutUser();
  }
}
