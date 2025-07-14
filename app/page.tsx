import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>
        <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
          <About />
        </section>
        <section id="projects" className="py-16 bg-white dark:bg-gray-900">
          <Projects />
        </section>
        <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
          <Contact />
        </section>
      </main>
    </>
  );
}