import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AutenticationService } from '../../servicios/autentication.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  signForm: FormGroup;
  sign: any;

  constructor(private formBuilder: FormBuilder,
              private autenticationService: AutenticationService) { }

  ngOnInit() {
    this.signForm = this.formBuilder.group({
      'email': ['', Validators.email],
      'password': ['']
    })
  }

  onSubmit(){
    this.sign = this.onSave();
    this.autenticationService.SignInUser(this.sign);
  }

  onSave(){
    let sign = {
      email: this.signForm.get('email').value,
      password: this.signForm.get('password').value
    }

    return sign;
  }

}
