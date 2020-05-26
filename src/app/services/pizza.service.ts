import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Pizza} from "../models/Pizza";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class PizzaService {


    pizzaList: BehaviorSubject<Pizza[]> = new BehaviorSubject<Pizza[]>([]);

    constructor(private http: HttpClient) {

    }

    getPizzas(): Observable<Pizza[]> {
      return this.http.get<Pizza[]>('https://jsonplaceholder.typicode.com/users?username=' + id)
          .pipe(
              map(value => {
                if (value.length > 0) {
                  return value[0];
                } else {
                  throw new Error ('Aucun utilisateur trouvé');
                }
              }),
              map(value => new User(value.id, value.name, value.email))
          );
    }


}
