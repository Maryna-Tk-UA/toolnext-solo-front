import css from "./AuthFooter.module.css";

const AuthFooter = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <p className={css.copy}>© {new Date().getFullYear()} ToolNext.</p>
      </div>
    </footer>
  );
};

export default AuthFooter;
