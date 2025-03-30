import { filterOptions } from "./Types";

export interface Recipe {
    id: number | string;
    name: string;
    reviews: number;
    cookedBefore: boolean;
    ingredients?: string[];
    preparation?: string;
}

export interface InitialState {
    recipes: Recipe[];
    filteredRecipes: Recipe[] | [];
    search: string;
    filter: filterOptions;
    selectedRecipe: Recipe;
}
