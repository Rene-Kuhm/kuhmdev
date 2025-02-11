import Image from "next/image";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Projects';
import Blog from './components/Blog';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
