import Hero from "../components/Hero";
import BestSelling from "../components/BestSellingPlants";
import About from "../components/About";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <BestSelling />
      <About />
      <Categories />
      <Testimonials />
    </>
  );
}

export default Home;
