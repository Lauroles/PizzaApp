export class Pizza{
    photo: string;
    nom: string;
    prix: string;
    id: string;
    ingredients: any;


    constructor(id: string, nom: string, prix: string, photo: string, ingredient: any) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.photo = photo;
        this.ingredients = ingredient;
    }
}
