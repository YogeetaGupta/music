import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import{_music,_Music} from './../model/music'

@Injectable()
export class MusicServices {

   private _url = "./../../assets/music.json";
   
    constructor(private http:Http){}

    GetMusic()
        {
            return this.http.get(this._url)
            .map((pro:Response) => {
            return  pro.json();
            })
        }


    MusicInfo(id:number):Observable<_music>
    {
       return this.http.get(this._url)
               .map((items)=>{
            let AllMusic=items.json();
            let mus=AllMusic.find((data:_music)=>data.id==id);
            return mus;
        });
    }
}