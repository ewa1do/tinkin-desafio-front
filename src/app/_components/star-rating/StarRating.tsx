import Image from "next/image";

export const MAX_STARS_ALLOWED = 4;

export function StarRating({ reviews, size = "md" }: { reviews: number; size: "md" | "lg" }) {
    if (reviews > MAX_STARS_ALLOWED) reviews = MAX_STARS_ALLOWED;

    return (
        <div>
            <i className="flex" data-testid="images">
                <PlaceStars reviews={reviews} active={true} size={size} />
                <PlaceStars reviews={MAX_STARS_ALLOWED - reviews} active={false} size={size} />
            </i>
        </div>
    );
}

function PlaceStars({
    reviews,
    active,
    size = "md",
}: {
    reviews: number;
    active: boolean;
    size: "md" | "lg";
}) {
    return Array.from({ length: reviews }).map((_, idx) => (
        <Image
            src={`${active ? "rating-star.svg" : "rating-star-inactive.svg"}`}
            alt="star"
            width={`${size === "md" ? 16 : 20}`}
            height={16}
            key={`--star--${idx}`}
        />
    ));
}
