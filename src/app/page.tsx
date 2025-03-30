"use client";
import { SetStateAction, useReducer, useState } from "react";
import { Toaster } from "react-hot-toast";

import {
    Aside,
    Nav,
    Title,
    Searchbar,
    RecipesTable,
    FilterButton,
    Tooltip,
    ModalForm,
    ModalEdit,
} from "@/app/_components/";

import { initialState, recipesReducer } from "./_store/slices/recipes";
import { InitialState, Recipe } from "./_models/Interfaces";
import { FormState, initialFormState } from "./_lib/initialFormState";
import { Action } from "./_store/slices/actionTypes";

export default function Home() {
    const [state, dispatch] = useReducer(recipesReducer, initialState);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userAction, setUserAction] = useState<"create" | "read" | null>(null);

    function onGetRecipe(recipe: Recipe) {
        setIsModalOpen(true);
        setUserAction("read");
        dispatch({ type: "SELECTED_RECIPE", payload: recipe });
    }

    return (
        <main>
            <Nav />
            {/* Searchbar and filters */}
            <section className="flex w-12/12">
                <Aside />

                {/* Table */}
                <TableWrapper
                    {...{
                        dispatch,
                        onGetRecipe,
                        setIsModalOpen,
                        setUserAction,
                        state,
                    }}
                />

                {/* Modal behavior */}
                {userAction === "create" && (
                    <ModalForm
                        {...{
                            setIsModalOpen,
                            isEditing: false,
                            isModalOpen,
                            dispatch,
                            initialFormState: initialFormState as FormState,
                        }}
                    />
                )}

                {userAction === "read" && (
                    <ModalEdit
                        {...{
                            isModalOpen,
                            setIsModalOpen,
                            recipe: state.selectedRecipe as Recipe,
                            dispatch,
                        }}
                    />
                )}
            </section>
            <Toaster />
        </main>
    );
}

interface TableProps {
    dispatch: (action: Action) => void;
    state: InitialState;
    onGetRecipe: (arg: Recipe) => void;
    setUserAction: React.Dispatch<SetStateAction<"create" | "read" | null>>;
    setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

function TableWrapper({ dispatch, state, onGetRecipe, setUserAction, setIsModalOpen }: TableProps) {
    return (
        <Wrapper>
            <div className="mt-8 h-12">
                <Title text="Kitchen Recipes" />
            </div>
            <div className="h-14 flex flex-col gap-y-2 lg:flex-row lg:gap-x-2">
                <Searchbar dispatch={dispatch} />
                <FilterButton filterStatus={state.filter} dispatch={dispatch} />
            </div>

            {/* Table */}
            <RecipesTable
                recipes={state.filteredRecipes}
                dispatch={dispatch}
                onGetRecipe={onGetRecipe}
            />
            <div className="flex  fixed bottom-20 right-10">
                <Tooltip content="Add recipe" position="left">
                    <button
                        className="bg-[#0C969D]  w-14 h-14 rounded-full flex justify-center items-center drop-shadow-2xl cursor-pointer"
                        onClick={() => {
                            setUserAction("create");
                            setIsModalOpen(true);
                        }}
                    >
                        <span className="text-5xl font-extralight text-white">+</span>
                    </button>
                </Tooltip>
            </div>
        </Wrapper>
    );
}

function Wrapper({ children }: React.PropsWithChildren) {
    return (
        <section className="grid grid-rows-2 grid-cols-1 ml-12 gap-2.5 h-fit w-12/12">
            {children}
        </section>
    );
}
