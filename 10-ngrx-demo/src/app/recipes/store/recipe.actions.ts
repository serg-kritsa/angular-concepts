import { Action } from '@ngrx/store';

export const FETCH_RECIPES = '[Recipes] Fetch Recipes';

export class FetchRecipes implements Action {
  readonly type = FETCH_RECIPES;
}

export type RecipesActions = FetchRecipes;
