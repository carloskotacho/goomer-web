import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { RestaurantFilter, RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurants-search',
  templateUrl: './restaurants-search.component.html',
  styleUrls: ['./restaurants-search.component.css']
})
export class RestaurantsSearchComponent implements OnInit {

  loading: boolean;

  totalElements = 0;
  filter = new RestaurantFilter();
  restaurants = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.loading = true;
  }

  index(page = 1) {
    this.filter.page = page;

    this.restaurantService.index(this.filter)
      .then(response => {
        this.totalElements = response['count'];
        this.restaurants = response['rows'];
      });
  }

  nextPage(event: LazyLoadEvent) {
    const page = (event.first / event.rows) + 1;

    setTimeout(() => {
      this.index(page);
      this.loading = false;
    }, 1000);
  }
}
