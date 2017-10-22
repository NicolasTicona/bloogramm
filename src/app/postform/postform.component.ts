import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { PostsService } from '../servicios/posts.service';
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

  constructor(private formBuilder: FormBuilder,
              private postsService: PostsService ) { }

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
      date: new Date()
    }
    return post;
  }

}
