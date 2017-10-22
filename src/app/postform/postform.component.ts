import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { PostsService } from '../servicios/posts.service';
import { AutenticationService } from '../servicios/autentication.service';
import * as firebase from 'firebase';

@Component({ 
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {

  postForm: FormGroup;
  post: any = {
    post: '',
  };
  email: any;

  constructor(private formBuilder: FormBuilder,
              private postsService: PostsService,
              private autenticationService: AutenticationService ) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      'post': '',
    })
  }

  onSubmit(){
    this.post = this.onSave();
    this.postsService.postPublication(this.post)
      .subscribe(newpost=>{

      })
  }

  onSave(){
    let post = {
      post: this.postForm.get('post').value,
      email: this.Email(),
      date: new Date()
    }
    return post;
  }

  isAuth(){
    return this.autenticationService.isAuthenticated();
  }

  Email(){
    return this.autenticationService.getEmailUser() ;
  }
}
