import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurants-search',
  templateUrl: './restaurants-search.component.html',
  styleUrls: ['./restaurants-search.component.css']
})
export class RestaurantsSearchComponent implements OnInit {

  restaurants = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.index();
  }

  index() {
    this.restaurantService.index()
      .then(restaurants => this.restaurants = restaurants);
  }
}
