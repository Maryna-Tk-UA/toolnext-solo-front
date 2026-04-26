import Link from "next/link";
import css from "./FeaturedToolsBlock.module.css";
import base from "../../ui/ButtonLink/ButtonLink.module.css";
import { getPopularTools } from "@/lib/serverApi";
import ToolGallery from "../ToolGallery/ToolGallery";

const PER_PAGE = 8;

const FeaturedToolsBlock = async () => {
  const data = await getPopularTools({ perPage: PER_PAGE });

  return (
    <article className={css.toolsBlock}>
      <div className={css.container}>
        <h2 className={css.title}>Популярні інструменти</h2>
        <ToolGallery tools={data?.tools ?? []} />
        <Link href="/tools" className={`${base.violet} ${css.allToolsBtn}`}>
          До всіх інструментів
        </Link>
      </div>
    </article>
  );
};

export default FeaturedToolsBlock;
