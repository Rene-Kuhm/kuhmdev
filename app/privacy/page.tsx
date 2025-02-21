import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Información que Recolectamos</h2>
          <p>Recopilamos información que usted nos proporciona directamente cuando:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Utiliza nuestro formulario de contacto</li>
            <li>Se suscribe a nuestro boletín informativo</li>
            <li>Interactúa con nuestro sitio web</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Uso de la Información</h2>
          <p>La información recopilada se utiliza para:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Responder a sus consultas y solicitudes</li>
            <li>Mejorar nuestros servicios</li>
            <li>Enviar comunicaciones relevantes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Protección de Datos</h2>
          <p>
            Implementamos medidas de seguridad apropiadas para proteger su información
            personal contra acceso, alteración o divulgación no autorizada.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Sus Derechos</h2>
          <p>Usted tiene derecho a:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Acceder a su información personal</li>
            <li>Solicitar la rectificación de datos inexactos</li>
            <li>Solicitar la eliminación de sus datos</li>
            <li>Oponerse al procesamiento de sus datos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Contacto</h2>
          <p>
            Si tiene preguntas sobre esta política de privacidad, puede contactarnos a
            través de nuestro formulario de contacto o por correo electrónico.
          </p>
        </section>
      </div>
    </div>
  );
}