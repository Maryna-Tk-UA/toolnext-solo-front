import css from "./BenefitsBlock.module.css";

const BenefitsBlock = () => {
  return (
    <article className={css.benefits}>
      <div className={css.container}>
        <div className={css.titleWrapper}>
          <h2 className={css.title}>
            ToolNext — платформа для швидкої та зручної оренди інструментів
          </h2>
          <p className={css.subtitle}>
            ToolNext допомагає знайти потрібний інструмент у декілька кліків.
            Користувачі можуть легко орендувати обладнання для ремонту чи хобі,
            а власники — зручно керувати своїми оголошеннями. Ми створили
            сервіс, щоб зробити процес оренди простим, доступним і вигідним для
            всіх.
          </p>
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            <svg className={css.icon} width="48" height="48">
              <use href="/icons/sprite.svg#icon-service_toolbox" />
            </svg>
            <h3 className={css.itemTitle}>Легкий доступ до інструментів</h3>
            <p className={css.itemDescr}>
              Знаходьте потрібний інструмент у своєму районі без зайвих дзвінків
              і пошуків. Просто введіть назву — і отримайте варіанти поруч із
              вами.
            </p>
          </li>
          <li className={css.item}>
            <svg className={css.icon} width="48" height="48">
              <use href="/icons/sprite.svg#icon-checkbook" />
            </svg>
            <h3 className={css.itemTitle}>Швидке бронювання</h3>
            <p className={css.itemDescr}>
              Бронюйте інструменти в кілька кліків. Жодних складних форм чи
              довгих очікувань — тільки простий та зручний процес.
            </p>
          </li>
          <li className={css.item}>
            <svg className={css.icon} width="48" height="48">
              <use href="/icons/sprite.svg#icon-manage_accounts" />
            </svg>
            <h3 className={css.itemTitle}>Зручне управління</h3>
            <p className={css.itemDescr}>
              Додавайте свої інструменти в каталог, редагуйте оголошення та
              контролюйте оренду. ToolNext допомагає перетворити зайві
              інструменти на додатковий дохід.
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default BenefitsBlock;
