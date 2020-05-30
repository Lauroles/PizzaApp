import { Component, OnInit } from '@angular/core';
import IPanier from '../models/iPanier';
import { CommonModule } from '@angular/common';
import IPizza from '../models/iPizza';
import {ModalController} from '@ionic/angular';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})

export class PanierPage implements OnInit {

  panier: IPanier[];
  pizza: IPizza[];
  constructor(public modalController : ModalController) {
  }

  ngOnInit() {
    this.panier = JSON.parse(localStorage.getItem('panier'));
    console.log(this.panier);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PanierPage,
      swipeToClose: true,
    });
    return await modal.present();
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
    location.reload();
    this.presentModal();
  }

  removePizza(id: number) {
    let panier: IPanier[] = JSON.parse(localStorage.getItem('panier'));
    if(!panier) {
      panier = [];
    }
    const index = panier.findIndex( x => x.pizza.id === id);
    if (index === -1) {
      panier.push({ pizza: this.pizza.find( x => x.id === id), quantite: 1})
    }
    else{
      panier[index].quantite--;
      if (panier[index].quantite === 0){
        panier.splice(index, 1);
      }
    }
    localStorage.setItem('panier', JSON.stringify(panier));
    location.reload();
    this.presentModal();
  }

  deletePizza(id: number){
    let panier: IPanier[] = JSON.parse(localStorage.getItem('panier'));
    if(!panier) {
      panier = [];
    }
    const index = panier.findIndex( x => x.pizza.id === id);
    if (index === -1) {
      panier.push({ pizza: this.pizza.find( x => x.id === id), quantite: 1})
    }
    else{
      panier.splice(index, 1);
      }
    localStorage.setItem('panier', JSON.stringify(panier));
    this.reload();
  }

  reload(){
    location.reload();
  }
}

