
import About from "./components/About";
import Contact from "./components/Contact";
import Experts from "./components/Experts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
  return(
    <div>
<Navbar/>
   
    <About/>
    <Services/>
    <Experts/>
    <Contact/>
    <Footer/>
    </div>

  )
}
