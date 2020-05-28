import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import IIngredient from '../models/iIngredient';
import {Ingredient} from '../models/Ingredient';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class IngredientService {


    IngredientList: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

    constructor(private http: HttpClient) {

    }

    getIngredient(): Observable<IIngredient[]> {
      return this.http.get<IIngredient[]>('https://api.ynov.jcatania.io/ingredient')
          .pipe(
              map(value => {
                if (value.length > 0) {
                  return value;
                } else {
                  throw new Error ('Aucun ingrédient trouvé');
                }
              }),
          );
    }
}
