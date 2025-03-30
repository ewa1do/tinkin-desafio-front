"use client";
import Image from "next/image";
import { v4 as uuid } from "uuid";

import { SwitchButton } from "../switch/SwitchButton";
import { RecipeModal } from "./Modal";
import { SetStateAction, useState } from "react";
import { MAX_STARS_ALLOWED } from "@/app/_models/Types";
import { EditRecipeAction, NewRecipeAction } from "@/app/_store/slices/actionTypes";
import { notify } from "@/app/_lib/notification/notify";
import { FormState } from "@/app/_lib/initialFormState";

type HandleChangeType = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
type SetFormStateType = React.Dispatch<React.SetStateAction<FormState>>;

export function ModalForm({
    isModalOpen,
    setIsModalOpen,
    dispatch,
    initialFormState,
    isEditing = false,
    setIsEditing,
}: {
    isModalOpen: boolean;
    setIsModalOpen: (arg: boolean) => void;
    dispatch: React.Dispatch<NewRecipeAction | EditRecipeAction>;
    initialFormState: FormState;
    isEditing: boolean;
    setIsEditing?: React.Dispatch<SetStateAction<boolean>> | null;
}) {
    const [formState, setFormState] = useState<FormState>(initialFormState);

    const missingInfo =
        !formState.name ||
        !formState.ingredients.length ||
        !formState.preparation ||
        !formState.reviews;

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { id, value } = e.target;
        setFormState((prev) => ({ ...prev, [id]: value }));
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (missingInfo) {
            notify("Oops, looks like you have missing info", "error");
            return;
        }

        dispatch({ type: "NEW_RECIPE", payload: { ...formState, id: uuid() } });
        setFormState(initialFormState);
        setIsModalOpen(false);
        notify();
    }

    function onUpdate(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (missingInfo) {
            notify("Oops, looks like you have missing info", "error");
            return;
        }

        dispatch({ type: "EDIT_RECIPE", payload: { ...formState, id: formState.id } });
        setFormState(initialFormState);
        setIsModalOpen(false);
        notify();
    }

    function onCancel() {
        if (setIsEditing) {
            setIsEditing(false);
        }
        setIsModalOpen(false);
    }

    return (
        <RecipeModal
            isOpen={isModalOpen}
            onClose={onCancel}
            title={`${!isEditing ? "New recipe" : "Edit recipe"}`}
        >
            <form id="modal-form" className="space-y-4" onSubmit={!isEditing ? onSubmit : onUpdate}>
                <RecipeName handleChange={handleChange} formState={formState} />
                <Ingredients formState={formState} setFormState={setFormState} />
                <Preparation handleChange={handleChange} formState={formState} />
                <Reviews formState={formState} setFormState={setFormState} />
                <CookedBefore formState={formState} setFormState={setFormState} />

                {!isEditing ? (
                    <div className="flex justify-end mt-20">
                        <button
                            type="submit"
                            className={`${
                                missingInfo
                                    ? " bg-[#B2B2B3] cursor-not-allowed"
                                    : "bg-[#0C969D] cursor-pointer"
                            } text-white font-semibold px-5 py-3 rounded-4xl`}
                        >
                            Create
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-end mt-20 gap-x-3">
                        <button
                            onClick={() => {
                                if (setIsEditing) {
                                    setIsEditing(false);
                                }
                            }}
                            type="button"
                            className={`bg-[#fff] border-2 border-[#0C969D] text-[#0C969D] font-semibold px-5 py-3 rounded-4xl cursor-pointer`}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={`${
                                missingInfo
                                    ? " bg-[#B2B2B3] cursor-not-allowed"
                                    : "bg-[#0C969D] cursor-pointer"
                            } text-white font-semibold px-5 py-3 rounded-4xl`}
                        >
                            Update
                        </button>
                    </div>
                )}
            </form>
        </RecipeModal>
    );
}

function RecipeName({
    formState,
    handleChange,
}: {
    formState: FormState;
    handleChange: HandleChangeType;
}) {
    return (
        <div className="mb-10">
            <label htmlFor="name" className="block text-sm font-medium  mb-4">
                Recipe name
            </label>
            <textarea
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-0"
                placeholder={`Title*\nE.g. Slow cooker beef and rice hot pot`}
                onChange={handleChange}
                value={formState?.name}
            ></textarea>
        </div>
    );
}

function Ingredients({
    formState,
    setFormState,
}: {
    formState: FormState;
    setFormState: React.Dispatch<SetStateAction<FormState>>;
}) {
    const [tempIngredientState, setTempIngredientState] = useState("");

    function handleIngredientChange(index: number, value: string) {
        const newIngredients = [...formState.ingredients];
        newIngredients[index] = value;
        setFormState((prev) => ({ ...prev, ingredients: newIngredients }));
    }

    function handleDeleteIngredient(index: number) {
        setFormState((prev) => ({
            ...prev,
            ingredients: prev.ingredients.filter((_, i) => i !== index),
        }));
    }

    function handleAddIngredient() {
        if (tempIngredientState === "") {
            notify("You can't have blank ingredients", "error");
            return;
        }

        setFormState((prev) => ({
            ...prev,
            ingredients: [...prev.ingredients, tempIngredientState],
        }));

        setTempIngredientState("");
    }

    return (
        <div>
            <label htmlFor="text" className="block text-sm font-medium mb-4">
                Ingredients
            </label>

            {formState.ingredients.length > 0 &&
                formState.ingredients.map((ingredient, i) => (
                    <div key={`--ing--${i}`} className="flex items-center gap-x-3 w-full mb-10">
                        <span className="text-[#79797A] text-sm w-1/12 -mr-2 ml-2">{i + 1}</span>
                        <input
                            type="text"
                            id="ingredients"
                            className="outline-0 mt-1 block w-10/12 border border-gray-300 rounded-md p-2"
                            value={ingredient}
                            name={`ingredient-${i}`}
                            onChange={(e) => handleIngredientChange(i, e.target.value)}
                        />

                        <span
                            className="text-[#79797A] text-sm w-1/12 cursor-pointer"
                            onClick={() => handleDeleteIngredient(i)}
                        >
                            <Image src="/trash-bin.svg" width={24} height={24} alt="icon" />
                        </span>
                    </div>
                ))}

            <div className="flex items-center gap-x-3 w-full mb-10">
                <span className="text-[#79797A] text-sm w-1/12 -mr-2 ml-2">
                    {formState.ingredients.length + 1}
                </span>
                <input
                    type="text"
                    id="ingredients"
                    className="mt-1 block w-10/12 border border-gray-300 rounded-md p-2 outline-0"
                    value={tempIngredientState}
                    onChange={(e) => setTempIngredientState(e.target.value)}
                />

                <span
                    className="text-[#79797A] text-sm w-1/12 cursor-pointer"
                    onClick={handleAddIngredient}
                >
                    <Image src="/plus-icon.svg" width={24} height={24} alt="icon" />
                </span>
            </div>
        </div>
    );
}

function Preparation({
    formState,
    handleChange,
}: {
    formState: FormState;
    handleChange: HandleChangeType;
}) {
    return (
        <div className="mb-10">
            <label htmlFor="text" className="block text-sm font-medium mb-4">
                Preparation
            </label>

            <textarea
                // type="text"
                id="preparation"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 min-h-[172px] outline-0"
                placeholder={`Instructions*\nWrite the steps...`}
                onChange={handleChange}
                value={formState?.preparation}
            ></textarea>
        </div>
    );
}

function Reviews({
    setFormState,
    formState,
}: {
    formState: FormState;
    setFormState: SetFormStateType;
}) {
    return (
        <div className="w-7/12 mb-10">
            <label htmlFor="text" className="block text-sm font-medium mb-4">
                Reviews
            </label>

            <ul className="flex justify-between">
                {Array.from({ length: MAX_STARS_ALLOWED }).map((_, i) => (
                    <li
                        className="flex gap-x-1.5"
                        key={"--review" + i}
                        value={i + 1}
                        onClick={() => {
                            setFormState((prev) => ({ ...prev, reviews: i + 1 }));
                        }}
                    >
                        {formState.reviews === i + 1 ? (
                            <div
                                className={`w-6 h-6 bg-[url(/radio-active.svg)] cursor-pointer`}
                            ></div>
                        ) : (
                            <div
                                className={`w-6 h-6 bg-[url(/radio-inactive.svg)] cursor-pointer`}
                            ></div>
                        )}

                        <span className="text-sm">{i + 1}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function CookedBefore({
    formState,
    setFormState,
}: {
    formState: FormState;
    setFormState: SetFormStateType;
}) {
    function toggleCookedBefore() {
        setFormState((prev) => ({ ...prev, cookedBefore: !prev.cookedBefore }));
    }

    return (
        <div>
            <label htmlFor="text" className="block text-sm font-medium mb-4">
                Cooked before
            </label>

            <SwitchButton
                isCookedBefore={formState.cookedBefore}
                onclick={() => toggleCookedBefore()}
            />
        </div>
    );
}
