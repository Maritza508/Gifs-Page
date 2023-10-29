import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = []
  private _tagsHistory: string [] = [];
  private giphyApiKey:  string = '5jK0i86lRVQlHigBz78ZONGkzEjvKUv9';
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs'


  constructor( private http: HttpClient ) { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  searchTag( tag: string ):void {
    if ( tag.trim().length === 0 )  return;
    this.organizeHistory( tag );

    const params = new HttpParams()
      .set('api_key', this.giphyApiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
    .subscribe( res => {

      this.gifList = res.data
      console.log({ gif: this.gifList});
    })
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
