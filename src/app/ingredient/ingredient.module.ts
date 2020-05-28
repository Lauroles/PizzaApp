import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientPage } from './ingredient.page';
import {IngredientService} from '../services/ingredient.service';
import {HeaderComponent} from '../header/header.component';
import {RouterModule} from '@angular/router'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: IngredientPage
      }
    ])
  ],
  declarations: [IngredientPage, HeaderComponent],
  providers: [IngredientService]
})
export class IngredientPageModule {}
