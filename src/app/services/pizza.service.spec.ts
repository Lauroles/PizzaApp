import {TestBed} from '@angular/core/testing';

import {PizzaService} from './pizza.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Pizza} from '../models/Pizza';


describe('PizzaService', () => {

    let httpTestingController: HttpTestingController;
    const mockData = [
        {
            photo: '89H323ENZJ0JI',
            nom: 'Royale',
            prix: '10',
            id: '2',
            ingredients: '[1,5,8]'
        }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PizzaService]
        });

        httpTestingController = TestBed.get(HttpTestingController);
    });

    it('should be created', () => {
        const service: PizzaService = TestBed.get(PizzaService);
        expect(service).toBeTruthy();
    });

    it('login', () => {
        const service: PizzaService = TestBed.get(PizzaService);
        let userReturned: Pizza;

        service.getPizzas()
            .subscribe(user => {
                userReturned = user;
            });

        // attente de la requete
        const req = httpTestingController.expectOne('https://api.ynov.jcatania.io/db');
        // reponse a la requete
        req.flush(mockData);
        // verification que toutes les requetes soient terminees
        httpTestingController.verify();

        expect(userReturned.nom).toBe(mockData[0].nom);
        expect(userReturned.id).toBe(mockData[0].id);
        expect(userReturned.prix).toBe(mockData[0].prix);
        expect(userReturned.ingredients).toBe(mockData[0].ingredients);
        expect(userReturned.photo).toBe(mockData[0].photo);
    });
});
