"use client";

import { CategoriesData } from "@/types/category";
import { ToolsData } from "@/types/tool";
import css from "./page.module.css";
import style from "../../../ui/ButtonLink/ButtonLink.module.css";
import ToolCard from "@/components/ToolCard/ToolCard";

type ToolsPageClientProps = {
  initialToolsData?: ToolsData;
  initialCategoriesData?: CategoriesData;
};

const ToolsPageClient = ({
  initialToolsData,
  initialCategoriesData,
}: ToolsPageClientProps) => {
  const tools = initialToolsData?.tools ?? [];
  const categories = initialCategoriesData?.categories ?? [];

  return (
    <div className={css.clientContainer}>
      <div className={css.filters}>
        <select className={css.selectCat} defaultValue="">
          <option value="">Всі категорії</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.title}
            </option>
          ))}
        </select>

        <div className={css.inputGroup}>
          <input className={css.input} type="number" placeholder="Ціна від" />
          <input className={css.input} type="number" placeholder="Ціна до" />
        </div>

        <button className={`${style.link} ${css.resetBtn}`} type="button">
          Скинути фільтри
        </button>

        <select className={css.selectPop} defaultValue="popular">
          <option value="popular">Популярні</option>
          <option value="price-asc">Спочатку дешевші</option>
          <option value="price-desc">Спочатку дорожчі</option>
          <option value="rating-desc">За рейтингом</option>
        </select>
      </div>

      <p className={css.summary}>
        Знайдено інструментів: {initialToolsData?.totalItems ?? tools.length}
      </p>

      <div className={css.grid}>
        {tools.map((tool) => (
          <ToolCard tool={tool} key={tool._id} />
        ))}
      </div>

      {initialToolsData && initialToolsData.totalPages > 1 && (
        <button
          className={`${style.violet} ${css.loadMoreButton}`}
          type="button"
        >
          Показати більше
        </button>
      )}
    </div>
  );
};

export default ToolsPageClient;
