import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Car } from '../model/car';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const SERVER_HOST: string = 'http://localhost:3000/Cars';

@Injectable()
export class CarService {

  constructor(private http: Http) {
  }

  public getCars(): Observable<Car[]> {
    return this.http.get(SERVER_HOST)
      .map((res: Response) => res.json())
      .catch((error: Response) => Observable.throw(error));
  }
}
