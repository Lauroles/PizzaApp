/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import {IngredientService} from '../../services/ingredient.service';
import {PizzaService} from '../../services/pizza.service';
import IIngredient from '../../models/iIngredient';
import IPizza from '../../models/iPizza';
import {ActivatedRoute} from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.page.html',
  styleUrls: ['./ingredient.page.scss'],
})
export class IngredientPage implements OnInit {

  ingredient: IIngredient[];

  constructor(private ingredientService: IngredientService) {

  }

  async ngOnInit() {
    this.ingredient = await this.ingredientService.getIngredient().toPromise();
  }
}
