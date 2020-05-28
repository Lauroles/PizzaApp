export class Pizza{
    photo: string;
    nom: string;
    prix: string;
    id: string;
    ingredients: number[];


    constructor(id: string, nom: string, prix: string, photo: string, ingredient: number[]) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.photo = photo;
        this.ingredients = ingredient;
    }
}
