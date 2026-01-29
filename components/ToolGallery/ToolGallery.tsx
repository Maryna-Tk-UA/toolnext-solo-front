import { ToolPopular } from "@/types/tool";
import ToolCard from "../ToolCard/ToolCard";
import css from "./ToolGallery.module.css";

type ToolGalleryProps = {
  tools: ToolPopular[];
};

const ToolGallery = ({ tools }: ToolGalleryProps) => {
  return (
    <ul className={css.list}>
      {tools.map((tool) => (
        <li key={tool._id}>
          <ToolCard tool={tool} />
        </li>
      ))}
    </ul>
  );
};

export default ToolGallery;
