import { Injectable } from '@angular/core';
import { ignoreElements } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string [] = [];
  private giphyApiKey = '5jK0i86lRVQlHigBz78ZONGkzEjvKUv9';
  constructor() { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  searchTag( tag: string ):void {
    if ( tag.trim().length === 0 )  return;
    this.organizeHistory( tag );
    console.log(this.tagsHistory);
  }

  organizeHistory( tag: string ) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes( tag )) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag )
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice(0,10);
  }

}
