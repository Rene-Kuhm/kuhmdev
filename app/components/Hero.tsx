import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00FF7F]/10 via-black to-black"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(#00FF7F 1px, transparent 1px),
              linear-gradient(to right, #00FF7F 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            mask: 'radial-gradient(circle at center, transparent 0%, black 100%)'
          }}
        ></div>

        {/* Glowing orb effect */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00FF7F]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00FF7F]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[#00FF7F]">IMAGINATION</span> IS MORE<br />
              IMPORTANT THAN<br />
              KNOWLEDGE
            </h1>
            <p className="text-gray-300 mb-8 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-[#00FF7F] text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Get Started
            </button>
          </div>
          <div className="relative md:flex justify-end">
            <div className="relative w-full aspect-square max-w-[700px] mx-auto md:mx-0">
              <Image
                src="/hero.png"
                alt="Hero Image"
                fill
                className="object-contain relative z-10"
                priority
              />
              {/* Image glow effect */}
              <div className="absolute inset-0 bg-[#00FF7F]/20 blur-[50px] -z-10 scale-90"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
