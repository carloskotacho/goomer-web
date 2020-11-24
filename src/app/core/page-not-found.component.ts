import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="container">
      <h1 class="text-center">Página não encontrada</h1>
      <img src='assets/showcase/images/404.svg' width='300'>
    <div>
  `,
  styles: [`
    .text-center {
      text-align: center;
    }

    .container img{
      margin-top: 5em;

      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  `]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
