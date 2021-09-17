import About from "../components/About"
import Showcase from "../components/Showcase"
function Homepage(){
 return(
     <div>
         <About/>
         <Showcase searchTerm="fantasy"/>
         <Showcase searchTerm="romance"/>
        
     </div>
 )   
}
export default Homepage