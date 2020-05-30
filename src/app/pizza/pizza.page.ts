/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../services/pizza.service';
import IPizza from '../models/iPizza';
import {ModalController} from '@ionic/angular';
import IPanier from '../models/iPanier';
import {PanierPage} from '../panier/panier.page';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.page.html',
  styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage implements OnInit {

  pizza: IPizza[];

  constructor(private pizzaService: PizzaService, public modalController : ModalController) {

  }

  async ngOnInit() {
    this.pizza = await this.pizzaService.getPizzas().toPromise();
  }

  addPizza(id: number) {
    let panier: IPanier[] = JSON.parse(localStorage.getItem('panier'));
    if(!panier) {
      panier = [];
    }
    const index = panier.findIndex( x => x.pizza.id === id);
    if (index === -1) {
      panier.push({ pizza: this.pizza.find( x => x.id === id), quantite: 1})
    }
    else{
      panier[index].quantite++;
      }
      localStorage.setItem('panier', JSON.stringify(panier));
        console.log(panier);
    }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PanierPage,
      swipeToClose: true,
    });
    return await modal.present();
  }

}
