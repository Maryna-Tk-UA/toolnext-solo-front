import BenefitsBlock from "@/components/BenefitsBlock/BenefitsBlock";
import FeaturedToolsBlock from "@/components/FeaturedToolsBlock/FeaturedToolsBlock";
import FeedbacksBlock from "@/components/FeedbacksBlock/FeedbacksBlock";
import HeroBlock from "@/components/HeroBlock/HeroBlock";
import RegistartionBlock from "@/components/RegistartionBlock/RegistartionBlock";

export default function Home() {
  return (
    <main>
      <HeroBlock />
      <BenefitsBlock />
      <FeaturedToolsBlock />
      <FeedbacksBlock />
      <RegistartionBlock />
    </main>
  );
}
