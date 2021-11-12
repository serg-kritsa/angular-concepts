import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import * as RecipesActions from './recipe.actions';
import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer';

@Injectable()
export class RecipeEffects {
  // // saving only added
  // @Effect({ dispatch: false })
  // saveRecipes = this.actions$.pipe(
  //   ofType(RecipesActions.ADD_RECIPE),
  //   switchMap((data: RecipesActions.AddRecipe) => {
  //     return this.http
  //       .post<Recipe>(
  //         'https://fir-app-99824-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
  //         {
  //           name: data.payload.name,
  //           description: data.payload.description,
  //           imagePath: data.payload.imagePath,
  //           ingredients: data.payload.ingredients
  //         }
  //       )
  //   })
  // );

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

  @Effect({dispatch: false})
  storeRecipes = this.actions$.pipe(
    ofType(RecipesActions.STORE_RECIPES),
    withLatestFrom(this.store.select('recipes')),
    switchMap(([actionData, recipesState]) => {
      return this.http.put(
        'https://fir-app-99824-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipesState.recipes
      );
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
