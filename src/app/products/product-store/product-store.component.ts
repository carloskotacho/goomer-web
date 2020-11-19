import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent implements OnInit {

  startHours: Date;

  endHours: Date;

  selectedValues: string[] = [];

  options: any[];

  valueDefaultOption = 'NÃO';

  constructor() {
    this.options = [
      { label: 'Não', value: 'NÃO' },
      { label: 'Sim', value: 'SIM' },
    ];
  }

  ngOnInit(): void {
  }

}
