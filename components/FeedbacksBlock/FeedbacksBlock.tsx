import css from "./FeedbacksBlock.module.css";

const FeedbacksBlock = () => {
  return (
    <article className={css.feedbacksBlock}>
      <div className={css.container}>
        <h2 className={css.title}>Останні відгуки</h2>
      </div>
    </article>
  );
};

export default FeedbacksBlock;
