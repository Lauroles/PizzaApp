/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../../services/pizza.service';
import IPizza from '../../models/iPizza';
import {ModalController} from '@ionic/angular';


@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.page.html',
  styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage implements OnInit {

  pizza: IPizza[];

  constructor(private pizzaService: PizzaService) {

  }

  async ngOnInit() {
    this.pizza = await this.pizzaService.getPizzas().toPromise();
  }
}
