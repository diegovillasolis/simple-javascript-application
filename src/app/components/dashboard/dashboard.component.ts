import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  typesOfVehicles: string[] = ['Cars', 'Trucks', 'Minivan'];
  prices: string[] = ['10000','2000', '30000', '50000'];
  years: string[] = ['2010', '2011', '2012', '2013'];

  constructor() { }

  ngOnInit() {
  }

}
