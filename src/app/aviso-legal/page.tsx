import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";

export default function AvisoLegal() {
  return (
    <section className="mb-10 mt-5 flex flex-col px-20 w-4/5">
      <Breadcrumb className="mb-7">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/aviso-legal">Aviso Legal</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold mb-4">Aviso Legal</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        1. Identificación del Titular
      </h2>
      <p className="mb-4">
        El titular de este sitio web, <strong>ProValencia.es</strong>, con
        dirección de contacto en{" "}
        <a
          href="mailto:maortizpelegrin@gmail.com"
          className="text-blue-600 hover:underline"
        >
          maortizpelegrin@gmail.com
        </a>
        , es responsable de la administración y funcionamiento del sitio.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. Propósito del Sitio
      </h2>
      <p className="mb-4">
        <strong>ProValencia.es</strong> es una plataforma para conectar a
        profesionales voluntarios y personas afectadas por la DANA en Valencia,
        permitiendo acceso a servicios de ayuda gratuitos.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. Condiciones de Uso
      </h2>
      <p className="mb-4">
        Al acceder y utilizar <strong>ProValencia.es</strong>, aceptas cumplir
        con las siguientes condiciones:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Utilizar el sitio de manera legal y respetuosa.</li>
        <li>
          No usar el sitio para actividades que perjudiquen a otros usuarios o
          terceros.
        </li>
        <li>
          Nos reservamos el derecho de suspender el acceso a usuarios que
          incumplan estas condiciones.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        4. Responsabilidad del Titular
      </h2>
      <p className="mb-4">
        <strong>ProValencia.es</strong> no se hace responsable de la exactitud o
        fiabilidad de la información publicada por usuarios, daños derivados del
        uso de la plataforma o el cumplimiento de servicios ofrecidos por
        profesionales.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        5. Propiedad Intelectual
      </h2>
      <p className="mb-4">
        Todo el contenido, diseño y código fuente del sitio{" "}
        <strong>ProValencia.es</strong> es propiedad exclusiva del titular.
        Queda prohibida la reproducción o distribución no autorizada.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        6. Modificaciones del Aviso Legal
      </h2>
      <p className="mb-4">
        Nos reservamos el derecho de modificar este aviso legal para adaptarlo a
        cambios normativos o del sitio. Recomendamos revisarlo periódicamente.
      </p>

      <p className="text-gray-500 text-sm">
        Última actualización: 8 de noviembre de 2024
      </p>
    </section>
  );
}
