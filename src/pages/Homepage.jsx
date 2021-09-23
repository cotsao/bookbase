import About from "../components/About";
import Showcase from "../components/Showcase";
import SubjectShowcase from "../components/SubjectShowcase";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";
function Homepage() {
  return (
    <div>
      <Hero />
      <About />
      <Newsletter />
      <Showcase />
      <Testimonials />
      <SubjectShowcase />
    </div>
  );
}
export default Homepage;
