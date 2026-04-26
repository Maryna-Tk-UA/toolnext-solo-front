import { getFeedbacks } from "@/lib/serverApi";
import css from "./FeedbacksBlock.module.css";
import FeedbacksSlider from "./FeedbacksSlider";

const PER_PAGE = 15;

const FeedbacksBlock = async () => {
  const data = await getFeedbacks({ perPage: PER_PAGE });
  const feedbacks = data.feedbacks;
  return (
    <article className={css.feedbacksBlock}>
      <div className={css.container}>
        <h2 className={css.title}>Останні відгуки</h2>
        <FeedbacksSlider feedbacks={feedbacks} />
      </div>
    </article>
  );
};

export default FeedbacksBlock;
