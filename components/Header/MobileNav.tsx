"use client";

import Link from "next/link";
import css from "./Header.module.css";
import base from "../../ui/ButtonLink/ButtonLink.module.css";
import Image from "next/image";

type MobileNavProps = {
  onClose: () => void;
};

const MobileNav = ({ onClose }: MobileNavProps) => {
  const name = "Користувач";
  const avatarUrl = "";
  //   const avatarUrl = "/images/default-avatar.jpg";
  const initial = name.trim().charAt(0).toUpperCase();
  const showFallback = !avatarUrl;

  // const isAuth = true;
  const isAuth = false;

  return (
    <>
      <nav className={css.nav}>
        <Link className={css.navLink} href="/" onClick={onClose}>
          Головна
        </Link>
        <Link className={css.navLink} href="/tools" onClick={onClose}>
          Інструменти
        </Link>

        {!isAuth ? (
          <>
            <Link className={css.navLink} href="/auth/login" onClick={onClose}>
              Увійти
            </Link>

            <Link
              className={`${css.primaryBtn} ${base.violet}`}
              href="/auth/register"
              onClick={onClose}
            >
              Зареєструватися
            </Link>
          </>
        ) : (
          <>
            <Link className={css.navLink} href="/profile" onClick={onClose}>
              Мій профіль
            </Link>

            <div className={css.userRow}>
              <div className={css.userLeft}>
                <div className={css.avatar}>
                  {showFallback ? (
                    <span className={css.avatarFallback}>{initial}</span>
                  ) : (
                    <Image src={avatarUrl} alt="name" width={32} height={32} />
                  )}
                </div>
                <p className={css.userName}>{name}</p>
              </div>

              <span className={css.userDivider} />

              <button
                className={css.logoutBtn}
                aria-label="Logout"
                // onClick={openLogoutModal}
              >
                <svg
                  className={css.iconLogout}
                  width="18"
                  height="19"
                  aria-hidden="true"
                >
                  <use href="/icons/sprite.svg#icon-logout" />
                </svg>
              </button>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default MobileNav;
