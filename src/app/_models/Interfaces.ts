export interface Recipe {
    id: number;
    name: string;
    reviews: number;
    cookedBefore: boolean;
    ingredients?: string[];
    preparation?: string;
}
