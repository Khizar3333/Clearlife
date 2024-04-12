
import About from "./components/About";
import Experts from "./components/Experts";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
  return(
    <div>
<Navbar/>
   
    <About/>
    <Services/>
    <Experts/>
    </div>

  )
}
