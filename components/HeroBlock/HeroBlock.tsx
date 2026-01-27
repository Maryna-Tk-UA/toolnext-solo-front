import SearchForm from "./SearchForm";
import css from "./HeroBlock.module.css";

const HeroBlock = () => {
  return (
    <article className={css.hero}>
      <div className={css.container}>
        <h1 className={css.title}>ToolNext — ваш надійний сусід</h1>
        <SearchForm />
      </div>
    </article>
  );
};

export default HeroBlock;
