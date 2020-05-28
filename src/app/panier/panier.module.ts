import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {HeaderComponent} from '../header/header.component';
import {RouterModule} from '@angular/router'
import {PanierPage} from './panier.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PanierPage
      }
    ])
  ],
  declarations: [PanierPage, HeaderComponent],
})
export class PanierPageModule {}
