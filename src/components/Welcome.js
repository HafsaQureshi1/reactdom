import  Herosection  from './Herosection';
import  Skills  from './Skills';
import  About  from './About';
import  Contact  from './Contact';
import  AllPortfolio  from './AllPortfolio';
export default function Welcome(){
    return(
        <div>
        <Herosection />
      <Skills />
      <AllPortfolio />
      
      <About />
      <Contact />
      </div>
    )
}