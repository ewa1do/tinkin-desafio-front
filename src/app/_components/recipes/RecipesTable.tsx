"use client";
import { Recipe } from "@/app/_models/Interfaces";
import { StarRating, SwitchButton } from "@/app/_components";
import Image from "next/image";
import { CookedBeforeToggleAction } from "@/app/_store/slices/actionTypes";
import { useState } from "react";

export function RecipesTable({
    recipes,
    dispatch,
    onGetRecipe,
}: {
    recipes: Recipe[];
    dispatch: React.Dispatch<CookedBeforeToggleAction>;
    onGetRecipe: (recipe: Recipe) => void;
}) {
    if (!recipes.length) {
        return (
            <div className="h-96 flex flex-col justify-center items-center">
                <Image
                    src="smiley-melting.svg"
                    alt="emoji"
                    width={40}
                    height={40}
                    style={{ height: "100px", width: "100px" }}
                />
                <h3 className="text-2xl p-3">No recipe found</h3>
            </div>
        );
    }

    return (
        <section className="overflow-x-auto pr-12 mt-6 lg:mt-0">
            <table className="min-w-12/12">
                <thead className="border-b-2 border-[#B1C4D1] ">
                    <tr className="text-sm font-semibold text-[#79797A]">
                        <th className="py-2 px-2 text-left w-7/12">Recipe name</th>
                        <th className="py-2 px-2 text-left w-3/12">Reviews</th>
                        <th className="py-2 px-2 text-left w-2/12">Cooked before</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((recipe, idx) => {
                        return (
                            <RecipeRow
                                recipe={recipe}
                                key={`recipe--${idx}`}
                                dispatch={dispatch}
                                onGetRecipe={onGetRecipe}
                            />
                        );
                    })}
                </tbody>
            </table>
        </section>
    );
}

function RecipeRow({
    recipe,
    dispatch,
    onGetRecipe,
}: {
    recipe: Recipe;
    dispatch: React.Dispatch<CookedBeforeToggleAction>;
    onGetRecipe: (recipe: Recipe) => void;
}) {
    function onChangeCookedBefore(payload: Recipe) {
        dispatch({ payload: payload.id, type: "TOGGLE_COOKED_BEFORE" });
    }

    const [isHovering, setIsHovering] = useState<boolean>(false);

    return (
        <tr
            className={`${isHovering && "bg-[#F9F9F9]"} border-b border-[#B1C4D1] h-14 text-base ${
                recipe.cookedBefore ? "text-[#19191A]" : "text-[#79797A]"
            }`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <td className="px-2 cursor-pointer" onClick={() => onGetRecipe(recipe)}>
                {recipe.name}
            </td>
            <td className="px-2">
                <StarRating reviews={recipe.reviews} size="md" />
            </td>
            <td className="px-2">
                <SwitchButton
                    isCookedBefore={recipe.cookedBefore}
                    onclick={() => onChangeCookedBefore(recipe)}
                />
            </td>
        </tr>
    );
}
