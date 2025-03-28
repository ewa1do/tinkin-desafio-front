import { SearchAction } from "@/app/_store/slices/actionTypes";
import Image from "next/image";

interface SearchbarProps {
    dispatch: React.Dispatch<SearchAction>;
}

export function Searchbar({ dispatch }: SearchbarProps) {
    function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: "SEARCH", payload: e.target.value });
    }

    return (
        <div
            data-testid="search-container"
            className="flex bg-[#f9f9f9] w-10/12 md:w-9/12 lg:w-6/12 rounded-2xl p-1"
        >
            <i className="m-3 cursor-pointer">
                <Image src="search.svg" alt="Search icon" width={28} height={28} />
            </i>
            <input
                onChange={onSearch}
                data-testid="searchbar"
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="text-2xl bg-[#f9f9f9] h-12 placeholder:text-lg w-full outline-none"
            />
        </div>
    );
}
