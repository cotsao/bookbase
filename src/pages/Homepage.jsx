import About from "../components/About"
import Showcase from "../components/Showcase"
import SubjectShowcase from "../components/SubjectShowcase"
function Homepage(){
 return(
     <div>
         <About/>
         <Showcase searchTerm="fantasy"/>
         <Showcase searchTerm="romance"/>
         <SubjectShowcase/>
        
     </div>
 )   
}
export default Homepage