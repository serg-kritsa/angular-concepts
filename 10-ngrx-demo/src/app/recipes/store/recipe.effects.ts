import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';

import * as RecipesActions from './recipe.actions';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeEffects {
  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(RecipesActions.FETCH_RECIPES),
    switchMap(() => {
      return this.http.get<Recipe[]>(
        'https://fir-app-99824-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
      );
    }),
    map(responseData => {
      const recipesArray: Recipe[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          recipesArray.push({ ...responseData[key] });
          // recipesArray.push({ ...responseData[key], id: key });
        }
      }
      return recipesArray;
    }),
    map(recipes => {
      return new RecipesActions.SetRecipes(recipes);
    })
  );

  @Effect({ dispatch: false })
  saveRecipes = this.actions$.pipe(
    ofType(RecipesActions.ADD_RECIPE),
    switchMap((data: RecipesActions.AddRecipe) => {
      return this.http
        .post<Recipe>(
          'https://fir-app-99824-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
          {
            name: data.payload.name,
            description: data.payload.description,
            imagePath: data.payload.imagePath,
            ingredients: data.payload.ingredients
          }
        )
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
