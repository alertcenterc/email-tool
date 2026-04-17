import { Footer } from "./sections/Footer";
import { HeroSection } from "./sections/Hero";
import { Navbar } from "./sections/NavBar";
import { Projects } from "./sections/Projects";
import { Services } from "./sections/Services";

function App() {
 
  return (
    <main className="bg-black text-white">
    <Navbar/>
    <HeroSection/>
    <Services/>
    <Projects/>
    <Footer/>
    </main>
  );
}

export default App;