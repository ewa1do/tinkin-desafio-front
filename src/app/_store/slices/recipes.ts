import { Recipe } from "@/app/_models/Interfaces";
import { filterOptions } from "@/app/_models/Types";
import { recipes } from "@/app/_lib/data";
import { Action } from "./actionTypes";

interface InitialState {
    recipes: Recipe[];
    filteredRecipes: Recipe[] | [];
    search: string;
    filter: filterOptions;
    selectedRecipe: Recipe;
}

export const initialState: InitialState = {
    recipes: [...recipes],
    filteredRecipes: [...recipes],
    search: "",
    filter: "all",
    selectedRecipe: {} as Recipe,
};

export function recipesReducer(state: InitialState, action: Action) {
    switch (action.type) {
        case "RECEIVED":
            return { ...state };

        case "SEARCH":
            const filteredBySearch = state.recipes.filter((recipe) =>
                recipe.name.toLowerCase().includes(action.payload.toLowerCase()),
            );

            const filteredBySearchAndCookedBefore =
                state.filter === "all"
                    ? filteredBySearch
                    : filteredBySearch.filter((recipe) =>
                          state.filter === "inactive" ? !recipe.cookedBefore : recipe.cookedBefore,
                      );

            return {
                ...state,
                search: action.payload,
                filteredRecipes: filteredBySearchAndCookedBefore,
            };

        case "COOKED_BEFORE":
            const filteredByCookedBefore = state.recipes.filter((recipe) => {
                if (action.payload === "active") return recipe.cookedBefore;
                if (action.payload === "inactive") return !recipe.cookedBefore;

                return true;
            });

            return {
                ...state,
                filter: action.payload,
                filteredRecipes:
                    state.search === ""
                        ? filteredByCookedBefore
                        : filteredByCookedBefore.filter((recipe) =>
                              recipe.name.toLowerCase().includes(state.search.toLowerCase()),
                          ),
            };

        case "TOGGLE_COOKED_BEFORE":
            const toggleCookedBeforeById = state.recipes.map((recipe) => {
                if (recipe.id === action.payload) {
                    return {
                        ...recipe,
                        cookedBefore: !recipe.cookedBefore,
                    };
                }

                return recipe;
            });

            return {
                ...state,
                recipes: toggleCookedBeforeById,
                filteredRecipes: toggleCookedBeforeById,
            };

        case "SELECTED_RECIPE":
            return { ...state, selectedRecipe: action.payload };

        case "NEW_RECIPE":
            const newRecipe = [...state.filteredRecipes, action.payload];
            return { ...state, filteredRecipes: newRecipe, recipes: newRecipe };

        case "EDIT_RECIPE":
            const editRecipe = state.filteredRecipes.map((recipe) => {
                if (recipe.id === action.payload.id) {
                    return { ...action.payload };
                }

                return recipe;
            });

            return { ...state, filteredRecipes: editRecipe, recipes: editRecipe };

        default:
            return state;
    }
}
