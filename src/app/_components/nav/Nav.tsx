import Image from "next/image";

export function Nav() {
    return (
        <nav className="h-20 shadow-2xs flex items-center">
            <Image className="ml-6" src={`logo.svg`} alt="Logo Tinkin" width="94" height="48" />
        </nav>
    );
}
