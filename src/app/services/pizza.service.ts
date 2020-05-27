import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import IPizza from '../models/iPizza';
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

    getPizzas(): Observable<IPizza[]> {
      return this.http.get<IPizza[]>('https://api.ynov.jcatania.io/pizza')
          .pipe(
              map(value => {
                if (value.length > 0) {
                  return value;
                } else {
                  throw new Error ('Aucune pizza trouvée');
                }
              }),
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
