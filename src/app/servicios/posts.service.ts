import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx'; 

@Injectable()
export class PostsService {

  URL = 'https://bloogramm.firebaseio.com/posts.json';

  constructor(private http: Http) { }


  postPublication(post){
    const newpost = JSON.stringify(post);
    const headers = new Headers({
      'Content-Type': 'application/json'
    })

    return this.http.post(this.URL, newpost, {headers})
      .map(res=>{
        console.log(res.json());
        return res.json();
      })
  }

  getPublication(){
    return this.http.get(this.URL)
      .map(res => res.json())
  }

}
