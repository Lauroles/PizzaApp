/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../services/pizza.service';
import {Pizza} from '../models/Pizza';
import IPizza from '../models/iPizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.page.html',
  styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage implements OnInit {

  panier: IPizza[];

  constructor(private pizzaService: PizzaService) {

  }

  async ngOnInit() {
    this.panier = await this.pizzaService.getPizzas().toPromise();
  }

  addPizza() {
    this.pizzaService.addPizzaToCart(Math.floor(Math.random() * Math.floor(999)));
  }

  rmPizza(numb: number) {
    this.pizzaService.deletePizzaFromCart(numb);
  }
}
