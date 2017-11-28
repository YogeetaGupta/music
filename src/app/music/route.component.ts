import{Component,OnInit} from '@angular/core'
import {ActivatedRoute,Params} from '@angular/router';
import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import{_Music} from './../model/music'
import{MusicServices} from './music.services'

@Injectable()
@Component({
    selector:'route',
    template:`
    <div class="panel" align="center" *ngIf= "model">
    <div class="panel-head">
    <h2>{{model.name}}</h2>
    </div>
    <div class="panel-body">
    <img class="img-responsive" [src]="model.src" height="350px" width="450px" />
    <audio controls>
    <source [src]="model.ogg" type="audio/ogg">
    <source [src]="model.asrc" type="audio/mpeg">
  
  </audio>
    </div>
    <div class="panel-foot">
     <h4>Rating:{{model.rating}}</h4>
    </div>
    </div>

    
    `,
    styles:[
        `
        div.panel{
            height:550px;
            width:550px;
            margin:0px auto;
            border:5px inset white;
        }
        `
    ]
})

export class RouteComponents implements OnInit{
    data;
    model = new _Music();
    
constructor(private _router:ActivatedRoute,public _serve:MusicServices) { }
ngOnInit() {

  this._router.params
  .subscribe((params) => {
      let mId= params['id'];
      this._serve.MusicInfo(mId).subscribe((data)=>{
          this.model=data; 
          console.log(this.model);
      })
  })
}
} 