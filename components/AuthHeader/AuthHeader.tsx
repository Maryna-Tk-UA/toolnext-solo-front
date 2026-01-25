import Link from "next/link";
import css from "./AuthHeader.module.css";
import Image from "next/image";

const AuthHeader = () => {
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
      </div>
    </header>
  );
};

export default AuthHeader;
