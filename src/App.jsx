import React, { useState, useEffect, createContext } from "react"; // Import useState, useEffect, createContext
import "./styles/App.css";
import Rect from "./components/Rect";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";
import Resume from "./sections/Resume";
import MouseSmokeEffect from "./components/MouseSmokeEffect";
import ThemeToggle from "./components/ThemeToggle"; // Import ThemeToggle

// Create a ThemeContext to provide theme and toggle function to children
export const ThemeContext = createContext(null);

function App() {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'dark';
  });

  // Effect to apply 'dark' class to html element and save theme to localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MouseSmokeEffect /> {/* Moved to the top level */}
      {/* git add . && git commit -m "fixed svg error" && git push origin main" */}
     
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <ContactUs />
        <Footer />
    
      <ThemeToggle /> {/* Render ThemeToggle */}
    </ThemeContext.Provider>
  );
}

export default App;
