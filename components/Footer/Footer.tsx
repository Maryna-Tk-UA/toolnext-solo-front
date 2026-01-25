import Link from "next/link";
import css from "./Footer.module.css";
import Image from "next/image";

const guestLinks = [
  { href: "/", label: "Головна" },
  { href: "/tools", label: "Інструменти" },
  { href: "/auth/login", label: "Увійти" },
  { href: "/auth/register", label: "Зареєструватися" },
];

const userLinks = [
  { href: "/", label: "Головна" },
  { href: "/tools", label: "Інструменти" },
  { href: "/profile", label: "Мій профіль" },
  { href: "/tools/create", label: "Опублікувати оголошення" },
];

const Footer = () => {
  const user = true;
  // const user = false;
  const isAuth = Boolean(user);
  const navLinks = isAuth ? userLinks : guestLinks;

  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <Link href="/" className={css.logo} aria-label="ToolNext home">
            <Image
              src="/images/Tool-Next.svg"
              alt="ToolNext"
              width={159}
              height={29}
              priority
            />
          </Link>

          <nav aria-label="Навігація футера">
            <ul className={css.nav}>
              {navLinks.map((li) => (
                <li key={li.href} className={css.navItem}>
                  <Link href={li.href} className={css.navLink}>
                    {li.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className={css.social} aria-label="Соцмережі">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className={css.socialBtn}
              >
                <svg className={css.socialIcon} aria-hidden="true">
                  <use href="/icons/sprite.svg#icon-Facebook" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className={css.socialBtn}
              >
                <svg className={css.socialIcon} aria-hidden="true">
                  <use href="/icons/sprite.svg#icon-Instagram" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <hr className={css.devider} />

        <p className={css.copy}>
          © {new Date().getFullYear()} ToolNext. Всі права захищені.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
