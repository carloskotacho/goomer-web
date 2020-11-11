import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurants-search',
  templateUrl: './restaurants-search.component.html',
  styleUrls: ['./restaurants-search.component.css']
})
export class RestaurantsSearchComponent {

  restaurants = [
    {
      name: 'Pastelaria do Rodizio Amaldicoado', address: 'Travessa da Judia, 511',
      schedules: 'De Segunda à Sexta das 11:30 as 14:00 e de Sabado à Domingo das 19:30 as 23:00'
    },
    {
      name: 'A Bahia Show', address: 'Rua Rebuzzi, 451',
      schedules: 'De Segunda à Sexta das 11:30 as 14:00 e de Sabado à Domingo das 19:30 as 23:00'
    },
    {
      name: 'Cozinha Master', address: 'Rua Belo Horizonte, 265',
      schedules: 'De Segunda à Sexta das 11:30 as 14:00 e de Sabado à Domingo das 19:30 as 23:00'
    },
    {
      name: 'Delicia Light', address: 'Rua dos Pegas, 162',
      schedules: 'De Segunda à Sexta das 11:30 as 14:00 e de Sabado à Domingo das 19:30 as 23:00'
    },
    {
      name: 'Tapioca da Mistura', address: 'Avenida Padre Antônio José dos Santos, 185',
      schedules: 'De Segunda à Sexta das 11:30 as 14:00 e de Sabado à Domingo das 19:30 as 23:00'
    }
  ];

}
