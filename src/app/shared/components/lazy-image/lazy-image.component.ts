import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  @Input()
  public urlImagen!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;


  ngOnInit(): void {
    if ( !this.urlImagen ) throw new Error('urlImagen property is required.');
  }

  onLoad() {
    console.log('image loaded');
    this.hasLoaded = true;
  }
}
