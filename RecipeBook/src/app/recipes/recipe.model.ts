import { Ingredient } from "../shared/ingredients.model";

export class Recipe{
    public name:string;
    public discription:string;
    public imagepath:string;
    public ingredients:Ingredient[];

    constructor( name:string ,desc:string , imagepath:string , ingredients:Ingredient[]) {
       this.name = name;
       this.discription = desc;
       this.imagepath = imagepath;
       this.ingredients = ingredients;
    }
}
