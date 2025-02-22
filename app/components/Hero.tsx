import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = memo(() => {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00FF7F]/10 via-black to-black" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("/grid.svg")',
            backgroundSize: '30px',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00FF7F]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00FF7F]/10 rounded-full blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-[#00FF7F]">LA IMAGINACIÓN</span> ES MÁS IMPORTANTE QUE EL CONOCIMIENTO
            </h1>
            <p className="text-gray-300 mb-8 text-lg">
              Transformando ideas en soluciones digitales innovadoras. Desarrollo web profesional con enfoque en resultados.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-[#00FF7F] text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Comenzar
            </Link>
          </div>
          <div className="relative md:flex justify-end">
            <div className="relative w-full aspect-square max-w-[700px] mx-auto md:mx-0">
              <Image
                src="/hero.png"
                alt="Hero Image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain relative z-10"
                priority
                loading="eager"
              />
              <div className="absolute inset-0 bg-[#00FF7F]/20 blur-[50px] -z-10 scale-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
