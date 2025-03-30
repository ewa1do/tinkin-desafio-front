import { Recipe } from "@/app/_models/Interfaces";
import { filterOptions } from "@/app/_models/Types";

export type SearchAction = {
    type: "SEARCH";
    payload: string;
};

export type CookedBeforeFilterAction = {
    type: "COOKED_BEFORE";
    payload: filterOptions;
};

export type CookedBeforeToggleAction = {
    type: "TOGGLE_COOKED_BEFORE";
    payload: number | string;
};

export type SelectedRecipeAction = {
    type: "SELECTED_RECIPE";
    payload: Recipe;
};

export type NewRecipeAction = {
    type: "NEW_RECIPE";
    payload: Recipe;
};

export type Action =
    | { type: "RECEIVED" }
    | SearchAction
    | CookedBeforeFilterAction
    | CookedBeforeToggleAction
    | SelectedRecipeAction
    | NewRecipeAction;
