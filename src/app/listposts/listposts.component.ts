import { Component, OnInit } from '@angular/core';
import { PostsService } from '../servicios/posts.service';

@Component({
  selector: 'app-listposts',
  templateUrl: './listposts.component.html',
  styleUrls: ['./listposts.component.css']
})
export class ListpostsComponent implements OnInit {

  posts: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPublication()
      .subscribe(posts => {
        for(const id in posts){
          const p = posts[id];
          p.id = id;
          this.posts.unshift(posts[id]);
        }
      })
  }

}
