/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import {IngredientService} from '../services/ingredient.service';
import {PizzaService} from '../services/pizza.service';
import IIngredient from '../models/iIngredient';
import IPizza from '../models/iPizza';
import {ActivatedRoute} from '@angular/router';
import { ModalController } from '@ionic/angular';
import {Ingredient} from '../models/Ingredient';
import {PanierPage} from '../panier/panier.page';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.page.html',
  styleUrls: ['./ingredient.page.scss'],
})
export class IngredientPage implements OnInit {

  pizza: IPizza;
  ingredients : IIngredient[];
  id : number;
  pizzaIngredients : IIngredient[];

  constructor(private pizzaService: PizzaService,  private route: ActivatedRoute, private ingredientService : IngredientService, public modalController : ModalController) {

  }

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    })
    this.pizza = await this.pizzaService.getOne(this.id).toPromise();
    this.ingredients = await this.ingredientService.getIngredient().toPromise();

    if (this.pizza.ingredients && this.pizza.ingredients.length > 0){
      this.pizzaIngredients = [];

      for (const i of this.pizza.ingredients){
        this.pizzaIngredients.push(this.ingredients.find(x => x.id === i))
      }
    }

  }
  addPizza(pizza: IPizza) {
    this.pizzaService.addPizzaToCart(Math.floor(Math.random() * Math.floor(999)));
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PanierPage,
      swipeToClose: true,
    });
    return await modal.present();
  }
}

