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

  options: SelectItem[];

  value = 'yes';

  selectedValues: string[] = [];

  constructor() {
    this.options = [{label: 'Não', value: 'not'}, {label: 'Sim', value: 'yes'}];
  }

  ngOnInit(): void {
  }

}
