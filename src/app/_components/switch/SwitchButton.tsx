import Image from "next/image";

export function SwitchButton({
    isCookedBefore,
    onclick,
}: {
    isCookedBefore: boolean;
    onclick: () => void;
}) {
    return (
        <button className="cursor-pointer" onClick={onclick}>
            <Image
                src={`/${isCookedBefore ? "switch-active.svg" : "switch-inactive.svg"}`}
                alt="switch-button"
                width={48}
                height={24}
            />
        </button>
    );
}
