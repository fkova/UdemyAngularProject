import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('any', 'test desc','https://www.nosalty.hu/files/imagecache/recept/recept_kepek/img_2400.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
