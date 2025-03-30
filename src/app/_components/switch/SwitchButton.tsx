import Image from "next/image";

export function SwitchButton({
    isCookedBefore,
    onclick: onClick,
}: {
    isCookedBefore: boolean;
    onclick: () => void;
}) {
    return (
        <button
            className="cursor-pointer"
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
        >
            <Image
                src={`/${isCookedBefore ? "switch-active.svg" : "switch-inactive.svg"}`}
                alt="switch-button"
                width={48}
                height={24}
            />
        </button>
    );
}
