import Link from "next/link";
import css from "./Header.module.css";
import Image from "next/image";

const DesktopMenu = () => {
  // const isAuth = false;
  const isAuth = true;

  const name = "Користувач";
  const avatarUrl = "";
  //   const avatarUrl = "/images/default-avatar.jpg";
  const initial = name.trim().charAt(0).toUpperCase();
  const showFallback = !avatarUrl;

  return (
    <nav className={css.desktopNav}>
      <Link className={css.desktopLink} href="/">
        Головна
      </Link>
      <Link className={css.desktopLink} href="/tools">
        Інструменти
      </Link>

      {!isAuth ? (
        <div className={css.provided}>
          <Link className={css.desktopLink} href="/auth/login">
            Увійти
          </Link>
          <Link className={css.registerBtn} href="/auth/register">
            Зареєструватися
          </Link>
        </div>
      ) : (
        <div className={css.provided}>
          <Link className={css.desktopLink} href="/profile">
            Мій профіль
          </Link>

          <Link className={css.publishBtnDesktop} href="/tools/new">
            Опублікувати оголошення
          </Link>

          <div className={css.userDesktop}>
            <div className={css.avatarDesktop}>
              {showFallback ? (
                <span className={css.avatarFallback}>{initial}</span>
              ) : (
                <Image src={avatarUrl} alt="name" width={32} height={32} />
              )}
            </div>

            <span className={css.userNameDesktop}>{name}</span>

            <span className={css.userDivider} aria-hidden="true" />

            <button
              className={css.logoutBtnDesktop}
              type="button"
              aria-label="Logout"
              // onClick={openLogoutModal}
            >
              <svg
                width="24"
                height="24"
                aria-hidden="true"
                className={css.iconLogoutDesktop}
              >
                <use href="/icons/sprite.svg#icon-logout" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DesktopMenu;
