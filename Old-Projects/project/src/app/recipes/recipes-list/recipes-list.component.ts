import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i.pinimg.com/736x/0d/20/c9/0d20c941c52f7d4907739015c31183f6.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://img.bestrecipes.com.au/misxCnaa/w643-h428-cfill-q90/br/2019/03/sausage-and-mushroom-stroganoff-951238-2.jpg')
  ];

}
