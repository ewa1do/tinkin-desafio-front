import { useState } from "react";

import { filterOptions } from "@/app/_models/Types";
import { CookedBeforeFilterAction } from "@/app/_store/slices/actionTypes";
import Image from "next/image";

interface IFilterButton {
    filterStatus: filterOptions;
    dispatch: React.Dispatch<CookedBeforeFilterAction>;
}

export function FilterButton({ filterStatus, dispatch }: IFilterButton) {
    const options: filterOptions[] = ["all", "active", "inactive"];

    const [isActive, setIsActive] = useState<boolean>(false);

    function onToggleActiveButton(): void {
        setIsActive((prevState) => !prevState);
    }

    function onChangeFilterStatus(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        const target = event.currentTarget as HTMLLIElement;
        const option = target.dataset.option as filterOptions;

        dispatch({ type: "COOKED_BEFORE", payload: option });
    }

    return (
        <button
            className="w-8/12 lg:w-auto cursor-pointer relative rounded-2xl text-sm py-3 px-6 bg-[#EBF0F3] flex gap-x-1.5 items-center"
            onClick={onToggleActiveButton}
        >
            Cooked Before: <span className="capitalize font-semibold">{filterStatus}</span>{" "}
            <i>
                <Image src="/arrow-drop.svg" alt="arrow dropwdown" width={16} height={16} />
            </i>
            {isActive && (
                <ul className="absolute w-64 drop-shadow-2xl top-12/12 bg-[#FDFDFD] left-0 p-2 rounded-2xl">
                    {options.map((opt) => (
                        <li
                            key={`option--${opt}`}
                            className="py-2.5 text-sm flex justify-between items-center capitalize"
                            data-option={opt}
                            onClick={(e) => onChangeFilterStatus(e)}
                        >
                            <span>{opt}</span>

                            {opt === filterStatus ? (
                                <div
                                    className={`w-6 h-6 bg-[url(/radio-active.svg)] `}
                                    data-option={opt}
                                ></div>
                            ) : (
                                <div
                                    className={`w-6 h-6 bg-[url(/radio-inactive.svg)] `}
                                    data-option={opt}
                                ></div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </button>
    );
}
