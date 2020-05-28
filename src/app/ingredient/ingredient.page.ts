/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import {IngredientService} from '../services/ingredient.service';
import IIngredient from '../models/iIngredient';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.page.html',
  styleUrls: ['./ingredient.page.scss'],
})
export class IngredientPage implements OnInit {

  panier: IIngredient[];

  constructor(private pizzaService: IngredientService) {

  }

  async ngOnInit() {
    this.panier = await this.pizzaService.getIngredient().toPromise();
  }
}
