import ToolCard from "../ToolCard/ToolCard";
import css from "./FeaturedToolsBlock.module.css";

const FeaturedToolsBlock = () => {
  return (
    <article className={css.toolsBlock}>
      <div className={css.container}>
        <h2 className={css.title}>Популярні інструменти</h2>
        <ToolCard />
      </div>
    </article>
  );
};

export default FeaturedToolsBlock;
