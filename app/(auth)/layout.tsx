import AuthFooter from "@/components/AuthFooter/AuthFooter";
import AuthHeader from "@/components/AuthHeader/AuthHeader";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <section className="appShell">
      <AuthHeader />
      <div className="appMain">{children}</div>
      <AuthFooter />
    </section>
  );
};

export default AuthLayout;
