export interface Recipe {
    id: number | string;
    name: string;
    reviews: number;
    cookedBefore: boolean;
    ingredients?: string[];
    preparation?: string;
}
