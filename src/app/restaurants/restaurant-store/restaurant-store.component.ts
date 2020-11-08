import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-store',
  templateUrl: './restaurant-store.component.html',
  styleUrls: ['./restaurant-store.component.css']
})
export class RestaurantStoreComponent implements OnInit {

  workingDaysStartHours: Date;
  workingDaysEndHours: Date;

  weekendsStartHours: Date;
  weekendsEndHours: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
