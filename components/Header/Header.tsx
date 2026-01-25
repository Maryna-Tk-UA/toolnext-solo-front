import Link from "next/link";
import css from "./Header.module.css";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Header = () => {
  // const isAuth = true;
  const isAuth = false;

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" className={css.logo} aria-label="ToolNext home">
          <Image
            src="/images/Tool-Next.svg"
            alt="ToolNext"
            width={83}
            height={15}
            priority
          />
        </Link>

        <div className={css.tabGroup}>
          {isAuth && (
            <Link href="/tools/new" className={css.createLink}>
              Опублікувати оголошення
            </Link>
          )}

          <MobileMenu />
        </div>
        <DesktopMenu />
      </div>
    </header>
  );
};

export default Header;
