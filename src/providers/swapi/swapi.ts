import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the SwapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SwapiProvider {

  endPoint = 'https://swapi.co/api';

  constructor(public http: HttpClient) {
    console.log('Hello SwapiProvider Provider');
  }

  listPeople() {
    return this.http.get(`${this.endPoint}/people/`)
    .map(res => res.results);
  }

}
