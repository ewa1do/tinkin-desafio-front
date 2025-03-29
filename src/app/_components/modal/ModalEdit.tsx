import { Recipe } from "@/app/_models/Interfaces";
import { RecipeModal } from "./Modal";
import { StarRating } from "../star-rating/StarRating";
import { SwitchButton } from "../switch/SwitchButton";
import { CookedBeforeToggleAction } from "@/app/_store/slices/actionTypes";
import { useEffect, useState } from "react";

export function ModalEdit({
    setIsModalOpen,
    isModalOpen,
    recipe,
    dispatch,
}: {
    isModalOpen: boolean;
    setIsModalOpen: (arg: boolean) => void;
    recipe: Recipe;
    dispatch: React.Dispatch<CookedBeforeToggleAction>;
}) {
    const [localRecipe, setLocalRecipe] = useState(recipe);

    useEffect(() => {
        setLocalRecipe(recipe);
    }, [recipe, recipe.cookedBefore]);

    function handleToggle() {
        setLocalRecipe((prev) => {
            return { ...prev, cookedBefore: !prev.cookedBefore };
        });

        dispatch({ payload: recipe.id, type: "TOGGLE_COOKED_BEFORE" });
    }

    return (
        <RecipeModal title={recipe.name} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <section className="grid grid-cols-1 gap-y-8">
                <div>
                    <h4 className="text-base font-semibold mb-2">Ingredients</h4>

                    <ul className="list-disc w-11/12 flex flex-col ml-6 text-lg font-normal">
                        {recipe.ingredients?.map((ingredient, i) => (
                            <li key={`--ingredient--${i}`}>{ingredient}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-base font-semibold mb-2">Preparation</h4>
                    <p className="text-lg/6 font-normal">{recipe.preparation}</p>
                </div>

                <div>
                    <h4 className="text-base font-semibold mb-2">Reviews</h4>
                    <StarRating reviews={recipe.reviews} size="lg" />
                </div>

                <div>
                    <h4 className="text-base font-semibold mb-2">Cooked before</h4>
                    <SwitchButton
                        isCookedBefore={localRecipe.cookedBefore}
                        onclick={handleToggle}
                    />
                </div>
            </section>
            <div className="flex justify-end mt-20">
                <button
                    type="submit"
                    className="bg-[#0C969D] text-white font-semibold px-8 py-3 rounded-3xl cursor-pointer"
                >
                    Edit
                </button>
            </div>
        </RecipeModal>
    );
}
