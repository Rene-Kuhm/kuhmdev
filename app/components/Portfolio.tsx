import Image from 'next/image';

const Portfolio = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      category: 'Diseño Web',
      image: '/portfolio1.jpg',
    },
    {
      title: 'Proyecto 2',
      category: 'Desarrollo',
      image: '/portfolio2.jpg',
    },
    {
      title: 'Proyecto 3',
      category: 'Marketing',
      image: '/portfolio3.jpg',
    },
  ];

  return (
    <section id="portfolio" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Últimos <span className="text-[#00FF7F]">Proyectos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explora algunos de nuestros proyectos más destacados que muestran nuestra experiencia y creatividad
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-[#00FF7F]">{project.category}</p>
                    <button className="mt-4 px-6 py-2 border border-[#00FF7F] text-[#00FF7F] rounded-full hover:bg-[#00FF7F] hover:text-black transition-all">
                      Ver Proyecto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
