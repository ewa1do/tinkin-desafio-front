import Image from "next/image";

export const MAX_STARS_ALLOWED = 4;

export function StarRating({ reviews }: { reviews: number }) {
    if (reviews > MAX_STARS_ALLOWED) reviews = MAX_STARS_ALLOWED;

    return (
        <div>
            <i className="flex" data-testid="images">
                <PlaceStars reviews={reviews} active={true} />
                <PlaceStars reviews={MAX_STARS_ALLOWED - reviews} active={false} />
            </i>
        </div>
    );
}

function PlaceStars({ reviews, active }: { reviews: number; active: boolean }) {
    return Array.from({ length: reviews }).map((_, idx) => (
        <Image
            src={`${active ? "rating-star.svg" : "rating-star-inactive.svg"}`}
            alt="star"
            width={16}
            height={16}
            key={`--star--${idx}`}
        />
    ));
}
