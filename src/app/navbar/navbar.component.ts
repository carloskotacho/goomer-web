import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Restaurantes',
        icon: 'fas fa-utensils',
      },
      {
        label: 'Produtos',
        icon: 'fas fa-cubes',
      },
    ];
  }

}
