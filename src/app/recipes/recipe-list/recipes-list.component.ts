import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test','https://www.cookingpanda.com/wp-content/uploads/2020/06/homemade-birria-tacos-recipe-1.jpg'),
    new Recipe('Test Recipe', 'This is a test','https://www.cookingpanda.com/wp-content/uploads/2020/06/homemade-birria-tacos-recipe-1.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
