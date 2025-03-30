import { useEffect, useRef } from "react";

export function RecipeModal({
    isOpen,
    onClose,
    title,
    children,
}: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close modal when clicking on backdrop
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    // Trap focus inside modal
    useEffect(() => {
        if (!isOpen) return;

        const focusableElements = modalRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ) as NodeListOf<HTMLElement>;

        if (focusableElements.length > 0) {
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            const handleTabKey = (e: KeyboardEvent) => {
                if (e.key === "Tab") {
                    if (e.shiftKey && document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            };

            document.addEventListener("keydown", handleTabKey);
            firstElement.focus();

            return () => {
                document.removeEventListener("keydown", handleTabKey);
            };
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-[#1E36464D] bg-opacity-50 z-40 transition-opacity " />

            {/* Modal container */}
            <div className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex min-h-full justify-end">
                    {/* Modal content */}
                    <div
                        ref={modalRef}
                        className="relative w-full max-w-lg bg-white shadow-xl transition-all 
                        h-screen overflow-y-auto
                        md:h-auto md:max-h-[100vh] "
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-white p-4 flex justify-between items-center z-10">
                            <h2 className="text-2xl font-semibold mt-3">{title}</h2>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
                                aria-label="Close modal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Body (form content) */}
                        <div className="p-4">{children}</div>

                        {/* <div className="sticky bottom-0 bg-white p-4 flex justify-end space-x-2">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                form="modal-form" // Connect this to your form's id
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Submit
                            </button> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
