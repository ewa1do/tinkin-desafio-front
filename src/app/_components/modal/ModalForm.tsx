import Image from "next/image";
import { SwitchButton } from "../switch/SwitchButton";
import { RecipeModal } from "./Modal";

export function ModalForm({
    isModalOpen,
    setIsModalOpen,
}: {
    isModalOpen: boolean;
    setIsModalOpen: (arg: boolean) => void;
}) {
    return (
        <RecipeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="New recipe">
            <form id="modal-form" className="space-y-4">
                <div className="mb-10">
                    <label htmlFor="name" className="block text-sm font-medium  mb-4">
                        Recipe name
                    </label>
                    <textarea
                        // type="text"
                        id="name"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        placeholder={`Title*\nE.g. Slow cooker beef and rice hot pot`}
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="text" className="block text-sm font-medium mb-4">
                        Ingredients
                    </label>

                    <div className="flex items-center gap-x-3 w-full mb-10">
                        <span className="text-[#79797A] text-sm w-1/12 -mr-2 ml-2">1</span>
                        <input
                            type="text"
                            id="ingredients"
                            className="mt-1 block w-10/12 border border-gray-300 rounded-md p-2"
                        />

                        <span className="text-[#79797A] text-sm w-1/12 cursor-pointer">
                            <Image src="/plus-icon.svg" width={24} height={24} alt="icon" />
                        </span>
                    </div>
                </div>

                <div className="mb-10">
                    <label htmlFor="text" className="block text-sm font-medium mb-4">
                        Preparation
                    </label>

                    <textarea
                        // type="text"
                        id="name"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 min-h-[172px]"
                        placeholder={`Instructions*\nWrite the steps...`}
                    ></textarea>
                </div>

                <div className="w-7/12 mb-10">
                    <label htmlFor="text" className="block text-sm font-medium mb-4">
                        Reviews
                    </label>

                    <ul className="flex justify-between">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <li className="flex gap-x-1.5" key={"--review" + i}>
                                <div className={`w-6 h-6 bg-[url(/radio-inactive.svg)] `}></div>
                                <span className="text-sm">{i + 1}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <label htmlFor="text" className="block text-sm font-medium mb-4">
                        Cooked before
                    </label>

                    <SwitchButton isCookedBefore={true} onclick={() => {}} />
                </div>

                <div className="flex justify-end mt-20">
                    <button
                        type="submit"
                        className="bg-[#B2B2B3] text-white font-semibold px-5 py-3 rounded-4xl cursor-pointer"
                    >
                        Create
                    </button>
                </div>
            </form>
        </RecipeModal>
    );
}
