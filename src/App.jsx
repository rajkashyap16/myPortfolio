import "./App.css";
import Rect from "./components/Rect";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";
import Resume from "./sections/Resume";

function App() {
  return (
    <>
    {/* git add . && git commit -m "fixed svg error" && git push origin main */}
      <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
