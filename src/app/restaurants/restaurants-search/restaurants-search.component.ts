import { Component, OnInit } from '@angular/core';
import { RestaurantFilter, RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurants-search',
  templateUrl: './restaurants-search.component.html',
  styleUrls: ['./restaurants-search.component.css']
})
export class RestaurantsSearchComponent implements OnInit {

  filter = new RestaurantFilter();
  restaurants = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.index();
  }

  index() {
    this.restaurantService.index(this.filter)
      .then(restaurants => this.restaurants = restaurants);
  }
}
