import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
