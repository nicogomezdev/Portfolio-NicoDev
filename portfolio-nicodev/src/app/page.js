import Hero from "./components/hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import BarSkills from "./components/BarSkills/BarSkills";
import Projects from "./components/Projects/Projects";





export default function Home() {
  return (
     <main >
        <Hero />
        <About />
        <Skills />
        <BarSkills />
        <Projects /> 
    </main>
  );
}
