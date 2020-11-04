import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {

  products = [
    {
      restaurant: 'Pastelaria do Rodizio Amaldicoado',
      name: 'Chopp',
      price: '10,00',
      category: 'Doces',
      description: 'Chopp pela metade do preço',
      promotion: 'Nos Sábados e Domingos das 11:30 até 14:00'
    },
    {
      restaurant: 'Pastelaria do Rodizio Amaldicoado',
      name: 'Empadão',
      price: '4,50',
      category: 'Salgado',
      description: null,
      promotion: null
    },
    {
      restaurant: 'A Bahia Show',
      name: 'Marmitex',
      price: '10,00',
      category: 'Outros',
      description: 'Marmitex pela metade do preço',
      promotion: 'Nos Sábados e Domingos das 11:00 até 14:30'
    },
    {
      restaurant: 'Pastelaria do Rodizio Amaldicoado',
      name: 'Suco de laranja',
      price: '2,00',
      category: 'Suco',
    },
    {
      restaurant: 'Cozinha Master',
      name: 'Biffet livre',
      price: '15,00',
      category: 'Outros',
      description: 'Todas as Quartas 40% off',
      promotion: 'Nos Sábados e Domingos das 11:00 até 14:30'
    },
  ];

}
