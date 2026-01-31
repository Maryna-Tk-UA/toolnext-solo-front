"use client";

import { useEffect, useState } from "react";
import css from "./Header.module.css";
import base from "../../ui/ButtonLink/ButtonLink.module.css";
import MobileNav from "./MobileNav";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const iconId = isMenuOpen ? "icon-close" : "icon-menu";
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const keyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", keyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", keyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <button
        className={`${css.menuBtn} ${base.transparent}`}
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsMenuOpen((v) => !v)}
      >
        <svg className={css.menuIcon} width="24" height="24" aria-hidden="true">
          <use href={`/icons/sprite.svg#${iconId}`} />
        </svg>
      </button>

      {isMenuOpen && (
        <div className={css.backdrop} onClick={closeMenu}>
          <div
            id="mobile-menu"
            className={css.menuPanel}
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <MobileNav onClose={closeMenu} />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
