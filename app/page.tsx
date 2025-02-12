import Image from "next/image";
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Projects';
import Blog from './components/Blog';

export default function Home() {
  return (
    <>
      <main className="bg-black">
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Blog isHomePage={true} />
      </main>
    </>
  );
}
