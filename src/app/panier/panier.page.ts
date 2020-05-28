import { Component, OnInit } from '@angular/core';
import IPanier from '../models/iPanier';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})

export class PanierPage implements OnInit {

  panier: IPanier[];

  constructor() {
  }

  ngOnInit() {
    this.panier = JSON.parse(localStorage.getItem('panier'));
    console.log(this.panier);
  }
}
