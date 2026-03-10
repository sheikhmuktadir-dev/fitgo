import About from "../../Components/About/About";
import Blog from "../../Components/Blog/Blog";
import Classes from "../../Components/Classes/Classes";
import FitnessVideo from "../../Components/FitnessVideo/FitnessVideo";
import Hero from "../../Components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FitnessVideo />
      <Classes />
      <Blog />
    </>
  );
}
