/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../services/pizza.service';
import {Pizza} from '../models/Pizza';
import IPizza from '../models/iPizza';
import {PanierComponent} from "../composent/panier/panier.component";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.page.html',
  styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage implements OnInit {

  panier: IPizza[];

  constructor(private pizzaService: PizzaService, public modalController : ModalController) {

  }

  async ngOnInit() {
    this.panier = await this.pizzaService.getPizzas().toPromise();
  }

  addPizza(pizza: IPizza) {
    this.pizzaService.addPizzaToCart(Math.floor(Math.random() * Math.floor(999)));
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PanierComponent,
      swipeToClose: true,
    });
    return await modal.present();
  }

  rmPizza(numb: number) {
    this.pizzaService.deletePizzaFromCart(numb);
  }
}
