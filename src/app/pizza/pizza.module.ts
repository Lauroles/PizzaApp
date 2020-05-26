import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaPage } from './pizza.page';
import {PizzaService} from '../services/pizza.service';
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
        component: PizzaPage
      }
    ])
  ],
  declarations: [PizzaPage, HeaderComponent],
  providers: [PizzaService]
})
export class PizzaPageModule {}
