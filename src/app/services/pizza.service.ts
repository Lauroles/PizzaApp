import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Pizza} from '../models/Pizza';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PizzaService {


    pizzaList: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

    constructor(private http: HttpClient) {

    }

    getPizzas(): Observable<Pizza> {
      return this.http.get<Pizza[]>('https://api.ynov.jcatania.io/db')
          .pipe(
              map(value => {
                if (value.length > 0) {
                  return value[0];
                } else {
                  throw new Error ('Aucune pizza trouvé');
                }
              }),
              map(value => new Pizza(value.id, value.nom, value.photo, value.ingredients, value.prix))
          );
    }

      addPizzaToCart(myNumb: number) {
        const tmp = this.pizzaList.getValue();
        tmp.push(myNumb);
        this.pizzaList.next(this.pizzaList.getValue());
      }
      deletePizzaFromCart(myNumb: number) {
        const index = this.pizzaList.getValue().indexOf(myNumb);
        this.pizzaList.getValue().splice(index, 1);
        this.pizzaList.next(this.pizzaList.getValue());
      }
}
