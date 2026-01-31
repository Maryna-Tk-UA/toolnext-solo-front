"use client";

import { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";
import "swiper/css";
import css from "./FeedbacksBlock.module.css";
import base from "../../ui/ButtonLink/ButtonLink.module.css";
import { FeedbackDto } from "@/types/feedback";
import RatingStars from "../RatingStars/RatingStars";

type Props = { feedbacks: FeedbackDto[] };

const getText = (f: FeedbackDto) => f.description || "";
const getAuthor = (f: FeedbackDto) => f.name || "Анонім";

function getWindow5(active: number, total: number) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i);

  let start = active - 2;
  let end = active + 2;

  if (start < 0) {
    end += -start;
    start = 0;
  }
  if (end > total - 1) {
    const shift = end - (total - 1);
    start = Math.max(0, start - shift);
    end = total - 1;
  }

  return Array.from({ length: 5 }, (_, i) => start + i);
}

const FeedbacksSlider = ({ feedbacks }: Props) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activePage, setActivePage] = useState(0);
  const [pagesCount, setPagesCount] = useState(1);
  const [groupNow, setGroupNow] = useState(1);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const hasFeedbacks = feedbacks.length > 0;
  const dots = useMemo(
    () => getWindow5(activePage, pagesCount),
    [activePage, pagesCount],
  );

  const sync = (swiper?: SwiperClass | null) => {
    if (!swiper || swiper.destroyed) return;

    setIsBeginning(Boolean(swiper.isBeginning));
    setIsEnd(Boolean(swiper.isEnd));

    setActivePage(swiper.snapIndex ?? 0);

    const total = swiper.snapGrid?.length ?? 1;
    setPagesCount(total);

    const spgRaw = swiper.params?.slidesPerGroup;
    const spg = typeof spgRaw === "number" && spgRaw > 0 ? spgRaw : 1;
    setGroupNow(spg);
  };

  if (!hasFeedbacks) return null;

  return (
    <div className={css.sliderWrap}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          sync(swiper);
        }}
        onSlideChange={(swiper) => sync(swiper)}
        onBreakpoint={(swiper) => requestAnimationFrame(() => sync(swiper))}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={32}
        breakpoints={{
          320: { slidesPerView: 1, slidesPerGroup: 1 },
          768: { slidesPerView: 2, slidesPerGroup: 2 },
          1440: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
      >
        {feedbacks.map((f) => (
          <SwiperSlide key={f._id}>
            <div className={css.card}>
              <RatingStars rating={f.rate} />
              <p className={css.text}>{getText(f)}</p>
              <p className={css.author}>{getAuthor(f)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={css.controls}>
        <div className={css.pagination} aria-label="Pagination">
          {dots.map((i) => {
            const dist = Math.abs(i - activePage);
            const sizeClass =
              dist === 0 ? css.dotMain : dist === 1 ? css.dotMid : css.dotSmall;

            return (
              <button
                key={i}
                type="button"
                className={`${css.dot} ${sizeClass} ${i === activePage ? css.dotActive : ""}`}
                aria-label={`Go to page ${i + 1}`}
                onClick={() => swiperRef.current?.slideTo(i * groupNow)}
              />
            );
          })}
        </div>

        <div className={css.nav}>
          <button
            type="button"
            className={`${css.navBtn} ${base.transparent}`}
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            aria-label="Попередні відгуки"
          >
            <svg className={css.icon} aria-hidden="true">
              <use href="/icons/sprite.svg#icon-arrow_back" />
            </svg>
          </button>

          <button
            type="button"
            className={`${css.navBtn} ${base.transparent}`}
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            aria-label="Наступні відгуки"
          >
            <svg className={css.icon} aria-hidden="true">
              <use href="/icons/sprite.svg#icon-arrow_forward" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbacksSlider;
