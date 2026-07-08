import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Awards />
      <Contact />
    </div>
  );
}
