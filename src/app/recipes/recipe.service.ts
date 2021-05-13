import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {Recipe} from './recipe.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Pizza Recipe',
      'Here\'s How Yum! delicious Pizza',
      'https://g.foolcdn.com/editorial/images/453272/pizza.jpg',
      [
        new Ingredient('Cups warm water', 1 ),
        new Ingredient('Teaspoon salt', 1),
        new Ingredient('cup olive oil', 1)

      ]),
    new Recipe('A delicious poutine Recipe. ',
      'Here\'s How to Make it Fast poutine fast.',
      'https://iamhomesteader.com/wp-content/uploads/2020/04/poutine-3.jpg',
      [
        new Ingredient('french fries', 50 ),
        new Ingredient('beef gravy', 20),
        new Ingredient('vegetable oil', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
  return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
  this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
  this.recipes.push(recipe);
  this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
  this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
