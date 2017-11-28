import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { MusicServices } from './music/music.services';
import 'rxjs/add/operator/map';
import {HttpModule} from '@angular/http';
import { RatingComponent } from './rating.component';
import { routes } from './app.routes';
import { RouteComponents } from './music/route.component';



@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    RatingComponent,
    RouteComponents
  ], 
  imports: [
    BrowserModule,HttpModule,routes,RouterModule
  ],
  providers: [MusicServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
