import css from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <form className={css.container}>
      <div className={css.field}>
        <label className={css.label} htmlFor="search">
          Пошук
        </label>
        <input
          id="search"
          type="text"
          autoComplete="off"
          placeholder="Дриль алмазного свердління"
          className={css.input}
          //   className={css.inputError}
          name="search"
        />
        {/* <p className={css.errorText}>Error message</p> */}
      </div>

      <button type="button" className={css.searchBtn}>
        Пошук
      </button>
    </form>
  );
};

export default SearchForm;
