import ChooseUs from "@/components/Home/ChooseUs";
import Featured from "@/components/Home/Featured";
import HeroSection from "@/components/Home/HeroSection";
import KnowUs from "@/components/Home/KnowUs";
import Testimonials from "@/components/Home/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <KnowUs />
      <Featured />
      <ChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
