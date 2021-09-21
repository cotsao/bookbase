import About from "../components/About";
import Showcase from "../components/Showcase";
import SubjectShowcase from "../components/SubjectShowcase";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
function Homepage() {
  return (
    <div>
      <Hero />
      <About />
      <Newsletter />
      <Showcase />
      <SubjectShowcase />
    </div>
  );
}
export default Homepage;
