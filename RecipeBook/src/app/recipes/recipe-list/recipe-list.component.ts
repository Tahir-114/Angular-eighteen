import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[];

  constructor(private reciepeService: RecipeService , private router: Router, private route:ActivatedRoute) { }
  ngOnInit(){
     this.recipes = this.reciepeService.getRecipes();
  }
  OnNewRecipe(){
     this.router.navigate(['new'] , {relativeTo: this.route});
  }
} 
