import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    var config = {
      apiKey: "AIzaSyA_iMeatPQSo5kTU8Np966mkYzRiaVRZeg",
      authDomain: "bloogramm.firebaseapp.com",
      databaseURL: "https://bloogramm.firebaseio.com",
      projectId: "bloogramm",
      storageBucket: "bloogramm.appspot.com",
      messagingSenderId: "194708379507"
    };
    firebase.initializeApp(config);
  }

}
