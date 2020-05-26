/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../services/pizza.service';
import {Pizza} from '../models/Pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.page.html',
  styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage implements OnInit {

  panier: Pizza[];

  constructor(private pizzaService: PizzaService) {
    this.pizzaService.getPizzas()
        .subscribe(value => {
          this.panier.push(value);
        });
  }

  ngOnInit() {
  }

  addPizza() {
    this.pizzaService.addPizzaToCart(Math.floor(Math.random() * Math.floor(999)));
  }

  rmPizza(numb: number) {
    this.pizzaService.deletePizzaFromCart(numb);
  }
}
