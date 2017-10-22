import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AutenticationService } from '../../servicios/autentication.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: any;

  constructor(private formBuilder: FormBuilder,
              private autenticationService: AutenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.email],
      'password': ['']
    })
  }

  onSubmit(){
    this.login = this.onSave();
    this.autenticationService.LogInUser(this.login);
  }

  onSave(){
    let sign = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }

    return sign;
  }

}
