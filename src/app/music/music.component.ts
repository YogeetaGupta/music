import { Component, OnInit } from '@angular/core';
import {MusicServices} from './music.services'
import{RatingComponent} from './../rating.component'

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  _music:any[];
  Music:any[];

  

  constructor(public _musicServices:MusicServices) { }
  content;
  ngOnInit() {
    this._musicServices.GetMusic()
    .subscribe((Music) => {
       this._music = Music;
       
    }); 
  }

  

  

}
