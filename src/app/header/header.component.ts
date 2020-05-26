import {Component, OnInit} from '@angular/core';
import {PizzaService} from '../services/pizza.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    count: number;

    constructor(private pizzaService: PizzaService) {
    }

    ngOnInit() {
        this.pizzaService.pizzaList
            .subscribe(value => {
                this.count = value.length;
            });
    }

}
