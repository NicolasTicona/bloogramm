import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AutenticationService {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  // Verifica si un usuario accedio
  isAuthenticated(){
    let user = firebase.auth().currentUser;
    if(user){
      return true;
    }else{
      return false;
    }
  }

  getEmailUser(){
    let userEmail = firebase.auth().currentUser;
    if(userEmail){
      return userEmail.email;
    }else{
      return false;
    }
  }

  // Registro
  SignInUser(user){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then( response => {
        console.log(response);
        this.router.navigate(['/'])
      })
      .catch(err => console.log(err))
  }

  // Login
  LogInUser(user){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then( response => {
        console.log(response);
        this.router.navigate(['/'])
      })
      .catch(err => console.log(err))
  }

  // Logout
  LogOutUser(){
    firebase.auth().signOut()
      .then( response => {
        console.log(response);
      })
  }
}
