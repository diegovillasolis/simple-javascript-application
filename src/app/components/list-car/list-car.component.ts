import { Component, OnInit } from '@angular/core';
import { Car } from "app/model/car";

@Component({
  selector: 'list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  private cars: Car[] = [
    { 
      "id": 1,
      "model": "Toyota	Corolla",
      "price":	8000, 
      "color":	"blue",
      "description": "Features and specs for the 2017 Toyota Corolla, including fuel economy, transmission, warranty, engine type, cylinders, drivetrain and more.",
      "profilePictureURL": "https://toyotacarsmodels.com/wp-content/uploads/2017/03/2018-Toyota-Corolla-Release-Date-and-Price-Ireland.jpg"
    },
    { 
      "id": 2,
      "model": "Nissan	Pathfinder",	
      "price":	12000, 
      "color":	"brown",
      "description": "Features and specs for the 2017 Toyota Corolla, including fuel economy, transmission, warranty, engine type, cylinders, drivetrain and more.",
      "profilePictureURL": "https://cars.usnews.com/static/images/Auto/izmo/i50858545/2018_nissan_pathfinder_angularfront.jpg"
    },
    { 
      "id": 3,
      "model": "Kia	Rio",	
      "price":	8000, 
      "color":	"green",
      "description": "Features and specs for the 2017 Toyota Corolla, including fuel economy, transmission, warranty, engine type, cylinders, drivetrain and more.",
      "profilePictureURL": "http://kiavalleoriente.com.mx/images/4_fiery_red-crop-u4023.png?crc=4062545714"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
