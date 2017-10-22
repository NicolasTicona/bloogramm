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
import { SignupComponent } from './register/signup/signup.component';
import { LoginComponent } from './register/login/login.component';

import { PostsService } from './servicios/posts.service';
import { AutenticationService } from './servicios/autentication.service';

const route: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'registro', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: HomepageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostformComponent,
    HomepageComponent,
    ListpostsComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(route),
  ],
  providers: [PostsService,AutenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
