import { Component, OnInit } from '@angular/core';

import { Car } from "app/model/car";
import { CarService } from "app/services/car.service";

@Component({
  selector: 'list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css'],
  providers: [CarService]
})
export class ListCarComponent implements OnInit {
  private cars: Car[] = [];
  
  constructor(private carService: CarService,) { }

  ngOnInit() {
    this.carService
    .getCars()
    .subscribe(
    (cars) => {
      this.cars = cars;
    },
    (error) => {
      console.log('Cannot get cars', error);
    }
    );
  }

}
