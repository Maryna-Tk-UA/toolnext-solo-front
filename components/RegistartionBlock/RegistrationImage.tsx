import css from "./RegistrationImage.module.css";

const RegistrationImage = () => {
  return (
    <picture className={css.picture}>
      <source
        media="(min-width: 1440px)"
        type="image/webp"
        srcSet="/images/registrationBlock/registration-desk-1.webp 1x,
          /images/registrationBlock/registration-desk-2.webp 2x"
      />

      <source
        media="(min-width: 768px)"
        type="image/webp"
        srcSet="
          /images/registrationBlock/registration-tab-1.webp 1x,
          /images/registrationBlock/registration-tab-2.webp 2x
        "
      />

      <img
        className={css.img}
        src="/images/registrationBlock/registration-mob-1.webp"
        srcSet="
          /images/registrationBlock/registration-mob-1.webp 1x,
          /images/registrationBlock/registration-mob-2.webp 2x
        "
        alt="Майстерня з інструментами"
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
};

export default RegistrationImage;
