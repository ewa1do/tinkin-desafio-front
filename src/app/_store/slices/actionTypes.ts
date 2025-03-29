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

export type Action =
    | { type: "RECEIVED" }
    | SearchAction
    | CookedBeforeFilterAction
    | CookedBeforeToggleAction;
