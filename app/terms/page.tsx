import React from 'react';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Términos de Servicio</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos
            términos de servicio y cumplir con todas las leyes y regulaciones aplicables.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Uso del Servicio</h2>
          <p>Usted se compromete a no:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Utilizar el servicio de manera ilegal o no autorizada</li>
            <li>Violar cualquier ley aplicable en su jurisdicción</li>
            <li>Interferir o interrumpir la seguridad del sitio</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Propiedad Intelectual</h2>
          <p>
            Todo el contenido presente en este sitio web, incluyendo pero no limitado a
            textos, gráficos, logotipos, imágenes y software, está protegido por
            derechos de autor y otras leyes de propiedad intelectual.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Limitación de Responsabilidad</h2>
          <p>
            En ningún caso seremos responsables por daños directos, indirectos,
            incidentales, consecuentes o especiales que surjan del uso o la
            imposibilidad de usar nuestros servicios.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier momento.
            Las modificaciones entrarán en vigor inmediatamente después de su
            publicación en el sitio web.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Contacto</h2>
          <p>
            Si tiene preguntas sobre estos términos de servicio, puede contactarnos a
            través de nuestro formulario de contacto o por correo electrónico.
          </p>
        </section>
      </div>
    </div>
  );
}