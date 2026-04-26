import { ToolPopular } from "@/types/tool";
import ToolCard from "../ToolCard/ToolCard";
import css from "./ToolsGrid.module.css";
import base from "../../ui/ButtonLink/ButtonLink.module.css";

type ToolsGridProps = {
  tools: ToolPopular[];
};

const ToolsGrid = ({ tools }: ToolsGridProps) => {
  return (
    <div>
      <ul className={css.list}>
        {tools.map((tool) => (
          <li key={tool._id}>
            <ToolCard tool={tool} />
          </li>
        ))}
      </ul>
      <button className={`${css.btnMore} ${base.violet}`}>
        Показати більше
      </button>
    </div>
  );
};

export default ToolsGrid;
