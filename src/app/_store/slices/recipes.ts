import { Recipe } from "@/app/_models/IRecipe";
import { filterOptions } from "@/app/page";
import { recipes } from "@/app/_lib/data";
import { Action } from "./actionTypes";

interface InitialState {
    recipes: Recipe[];
    filteredRecipes: Recipe[] | [];
    search: string;
    filter: filterOptions;
}

export const initialState: InitialState = {
    recipes: [...recipes],
    filteredRecipes: [],
    search: "",
    filter: "all",
};

export function recipesReducer(state: InitialState, action: Action) {
    switch (action.type) {
        case "RECEIVED":
            return { ...state };

        case "SEARCH":
            return {
                ...state,
                search: action.payload,
                filteredRecipes: state.recipes.filter((recipe) =>
                    recipe.name.toLowerCase().includes(action.payload.toLowerCase()),
                ),
            };
    }
}
