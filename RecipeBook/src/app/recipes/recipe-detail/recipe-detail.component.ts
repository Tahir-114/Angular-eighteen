import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { relative } from 'path';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
[x: string]: any;

  recipedetail!: Recipe;
  id!: number;

   constructor(private recipeService: RecipeService , private route:ActivatedRoute, private router: Router) { }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipedetail = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddShoppingList(){
   this.recipeService.addingredientsToShoppingList(this.recipedetail.ingredients);
  }
  OnEditRecipe (){
  // this.router.navigate(['edit'] , {relativeTo : this.route});
  this.router.navigate(['../' , this.id , 'edit'] , {relativeTo:this.route});
  }
}
