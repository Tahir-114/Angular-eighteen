import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 'A super-tasty Schhnitzel - Just Awesome', 
            'https://static.vecteezy.com/system/resources/previews/006/422/453/non_2x/chicken-wings-traditional-asian-recipe-dark-background-copy-space-top-view-photo.jpeg',
            [
                new Ingredient('Meat' , 1),
                new Ingredient('French Fries' , 20)
            ]),
        new Recipe('Big Fat Burger', 'What else you need to say?', 'https://www.simplyrecipes.com/thmb/5KEzbHplXxqFntM-jqrI0QdExR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Egg-Salad-Sandwich-LEAD-22-8ecbb89abda34a84b649ff4c44bab525.JPG',
            [
                new Ingredient('Beef' , 1),
                new Ingredient('Buns' , 1),
            ]
        )
    ];
    constructor(private slService: ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index:number){
        return this.recipes[index];
    }
    addingredientsToShoppingList(ingredients:Ingredient[]){
   this.slService.addIngredientinShoppingList(ingredients);
    }
}