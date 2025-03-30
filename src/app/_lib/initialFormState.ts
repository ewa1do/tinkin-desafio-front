import { Recipe } from "../_models/Interfaces";

export type FormState = {
    id: string;
    name: string;
    ingredients: string[];
    preparation: string;
    reviews: number;
    cookedBefore: boolean;
};

export const initialFormState: FormState | Recipe = {
    id: "",
    name: "",
    ingredients: [],
    preparation: "",
    reviews: 0,
    cookedBefore: true,
};
