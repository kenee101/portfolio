import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import { useScrollSpy } from "./hooks/useScrollSpy";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { activeSection, isScrolled, isVisible } = useScrollSpy();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Navigation
        activeSection={activeSection}
        isScrolled={isScrolled}
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigate={scrollToSection}
      />
      <Hero visible={isVisible.home} onNavigate={scrollToSection} />
      <Expertise visible={isVisible.expertise} />
      <Experience visible={isVisible.experience} />
      <Projects visible={isVisible.projects} />
      <Contact visible={isVisible.contact} />
      <Footer />
    </div>
  );
}
