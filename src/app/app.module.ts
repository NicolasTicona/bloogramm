import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostformComponent } from './postform/postform.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListpostsComponent } from './listposts/listposts.component';

import { PostsService } from './servicios/posts.service';

const route: Routes = [
  {path: '', component: HomepageComponent},
  {path: '**', component: HomepageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostformComponent,
    HomepageComponent,
    ListpostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(route),
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
