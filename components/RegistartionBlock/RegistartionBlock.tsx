import Link from "next/link";
import css from "./RegistartionBlock.module.css";
import base from "../../ui/ButtonLink/ButtonLink.module.css";
import RegistrationImage from "./RegistrationImage";

const RegistartionBlock = () => {
  return (
    <article className={css.registrationBlock}>
      <div className={css.container}>
        <div className={css.textWrapper}>
          <h2 className={css.title}>
            Зареєструйтесь і отримайте доступ до інструментів поруч із вами
          </h2>
          <p className={css.description}>
            Не витрачайте гроші на купівлю — орендуйте зручно та швидко.
            Приєднуйтесь до ToolNext вже сьогодні!
          </p>
          <Link
            href="/auth/register"
            className={`${css.registerBtn} ${base.violet}`}
          >
            Зареєструватися
          </Link>
        </div>
        <RegistrationImage />
      </div>
    </article>
  );
};

export default RegistartionBlock;
