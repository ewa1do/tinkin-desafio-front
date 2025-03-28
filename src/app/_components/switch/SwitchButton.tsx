import Image from "next/image";

export function SwitchButton({ isCookedBefore }: { isCookedBefore: boolean }) {
    return (
        <button className="cursor-pointer">
            <Image
                src={`/${isCookedBefore ? "switch-active.svg" : "switch-inactive.svg"}`}
                alt="switch-button"
                width={48}
                height={24}
            />
        </button>
    );
}
