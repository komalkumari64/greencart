import HeroSlider from "../components/HeroSlider";
import Categories from "../components/Categories";
import BestSellers from "../components/BestSellers";
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <>
     <HeroSlider/>
      <Categories />
      <BestSellers />
      <WhyUs />
    </>
  );
};

export default Home;