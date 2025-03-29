import { useRef, useState } from "react";

type Positions = "top" | "bottom" | "left" | "right";

interface IPosition {
    top: string;
    bottom: string;
    left: string;
    right: string;
}

export function Tooltip({
    children,
    content,
    position = "top",
}: {
    children: React.ReactNode;
    content: string;
    position: Positions;
}) {
    const [isVisible, setIsVisible] = useState(false);
    const tooltipRef = useRef(null);

    const positionClasses: IPosition = {
        top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
        left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
        right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            ref={tooltipRef}
        >
            {children}

            {isVisible && (
                <div
                    className={`
              absolute z-50 w-max max-w-xs px-3 py-2 text-sm
              bg-gray-800 text-white rounded-md shadow-lg
              transition-opacity duration-200
              ${positionClasses[position]}
            `}
                >
                    {content}
                    <div
                        className={`absolute w-2 h-2 bg-gray-800 transform rotate-45 ${getArrowPosition(
                            position,
                        )}`}
                    />
                </div>
            )}
        </div>
    );
}

function getArrowPosition(position: Positions) {
    switch (position) {
        case "top":
            return "bottom-[-2px] left-1/2 -translate-x-1/2";
        case "bottom":
            return "top-[-2px] left-1/2 -translate-x-1/2";
        case "left":
            return "right-[-2px] top-1/2 -translate-y-1/2";
        case "right":
            return "left-[-2px] top-1/2 -translate-y-1/2";
        default:
            return "";
    }
}
