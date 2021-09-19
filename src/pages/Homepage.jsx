import About from "../components/About"
import Showcase from "../components/Showcase"
import SubjectShowcase from "../components/SubjectShowcase"
import Hero from "../components/Hero"
function Homepage(){
 return(
     <div>
         <Hero/>
         <About/>
         <Showcase searchTerm="fantasy"/>
         <Showcase searchTerm="romance"/>
         <SubjectShowcase/>
        
     </div>
 )   
}
export default Homepage