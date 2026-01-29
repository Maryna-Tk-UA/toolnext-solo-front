import css from "./RatingStars.module.css";

type RatingStarsProps = {
  rating?: number;
  max?: number;
  size?: number;
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function roundToHalf(value: number) {
  return Math.round(value * 2) / 2;
}

const RatingStars = ({ rating, max = 5, size = 24 }: RatingStarsProps) => {
  const raw =
    typeof rating === "number" && Number.isFinite(rating) ? rating : 0;
  const safe = clamp(raw, 0, max);
  const rounded = roundToHalf(safe);

  return (
    <div className={css.stars} aria-label={`Рейтинг: ${rounded} з ${max}`}>
      {Array.from({ length: max }, (_, i) => {
        const starIndex = i + 1;

        let iconId = "icon-star";
        if (starIndex <= rounded) iconId = "icon-star-filled";
        else if (starIndex - 0.5 === rounded) iconId = "icon-star_half";

        return (
          <svg
            key={starIndex}
            className={css.star}
            width={size}
            height={size}
            aria-hidden="true"
          >
            <use href={`/icons/sprite.svg#${iconId}`} />
          </svg>
        );
      })}
    </div>
  );
};

export default RatingStars;
