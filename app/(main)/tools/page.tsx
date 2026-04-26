import { getCategories, getPopularTools } from "@/lib/serverApi";
import css from "./page.module.css";
import ToolsPageClient from "./ToolsPageClient";

const ToolsPage = async () => {
  const [toolsData, categoriesData] = await Promise.all([
    getPopularTools({ perPage: 12 }),
    getCategories(),
  ]);

  return (
    <section className={css.page}>
      <div className={css.container}>
        <h2 className={css.title}>Всі інструменти</h2>
        <ToolsPageClient
          initialToolsData={toolsData}
          initialCategoriesData={categoriesData}
        />
      </div>
    </section>
  );
};

export default ToolsPage;
