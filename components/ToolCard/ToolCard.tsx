import { ToolPopular } from "@/types/tool";
import Image from "next/image";
import css from "./ToolCard.module.css";
import base from "../../ui/ButtonLink/ButtonLink.module.css";
import Link from "next/link";
import RatingStars from "../RatingStars/RatingStars";

type ToolCardProps = {
  tool: ToolPopular;
};

const ToolCard = ({ tool }: ToolCardProps) => {
  const safeSrc = tool.images ? tool.images : "/images/placeholder-image.png";
  const name = tool.name?.trim() ? tool.name : "Зображення інструменту";
  const price = tool.pricePerDay ? tool.pricePerDay : 0;
  const toolId = tool._id;
  return (
    <div className={css.container}>
      <div className={css.thumb}>
        <Image
          src={safeSrc}
          alt={name}
          className={css.image}
          width={335}
          height={412}
        />
      </div>
      <RatingStars rating={tool.rating} />
      <p className={css.title}>{name}</p>
      <p className={css.price}>{price} грн/день</p>
      <Link
        href={`/tools/${toolId}`}
        className={`${css.detailBtn} ${base.transparent}`}
      >
        Детальніше
      </Link>
    </div>
  );
};

export default ToolCard;
