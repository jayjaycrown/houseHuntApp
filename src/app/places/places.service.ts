import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  // tslint:disable-next-line: variable-name
  private _places: Place[] = [
    new Place(
      'p1',
      'Tenrou Island',
      'Sacred ground for Fairy Tail guild',
      'assets/img/p3.jpg',
      109.99
      ),
    new Place(
      'p2',
      'Alvarez Empire',
      'Emperror Sprigan\'s kingdom',
      'assets/img/p2.jpg',
      112.99
    ),
    new Place(
      'p3',
      'Fiore Kingdom',
      'FairyTail\'s Home town',
      'assets/img/p1.jpg',
      100.99
      )
  ];


  get places() {
    return [...this._places];
  }

  constructor() { }
}
