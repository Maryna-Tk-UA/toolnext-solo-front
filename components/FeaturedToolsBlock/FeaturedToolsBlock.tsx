import Link from "next/link";
import ToolCard from "../ToolCard/ToolCard";
import css from "./FeaturedToolsBlock.module.css";
import base from "../../ui/ButtonLink/ButtonLink.module.css";

const FeaturedToolsBlock = () => {
  return (
    <article className={css.toolsBlock}>
      <div className={css.container}>
        <h2 className={css.title}>Популярні інструменти</h2>
        <ToolCard />
        <Link href="/tools" className={`${base.visual} ${css.registerBtn}`}>
          До всіх інструментів
        </Link>
      </div>
    </article>
  );
};

export default FeaturedToolsBlock;
