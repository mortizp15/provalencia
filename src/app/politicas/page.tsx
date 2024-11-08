import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Politicas() {
  return (
    <section className="mb-10 mt-5 flex flex-col px-20 w-4/5">
      <Breadcrumb className="mb-7">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/politicas">Politica de Privacidad</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
      <p className="mb-4">
        En <strong>ProValencia.es</strong>, estamos comprometidos con la
        protección de la privacidad de nuestros usuarios. Esta política de
        privacidad describe cómo recopilamos, usamos y compartimos la
        información personal que nos proporcionas al utilizar nuestro sitio web.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        1. Información que Recopilamos
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Información de contacto:</strong> al registrarte o
          contactarnos, recopilamos tu nombre, correo electrónico y otra
          información que nos proporciones.
        </li>
        <li>
          <strong>Información de uso:</strong> sobre cómo utilizas nuestro
          sitio, incluidas las páginas visitadas e interacciones.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. Uso de la Información
      </h2>
      <p className="mb-4">
        La información que recopilamos se usa para proporcionarte acceso y
        funcionalidades en nuestro sitio, mejorar tu experiencia, responder a
        tus solicitudes y enviar comunicaciones importantes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. Compartición de la Información
      </h2>
      <p className="mb-4">
        <strong>ProValencia.es</strong> no comparte ni vende tu información
        personal a terceros, excepto cuando sea necesario para cumplir con la
        ley o proteger nuestros derechos y la seguridad de nuestros usuarios.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        4. Derechos del Usuario
      </h2>
      <p className="mb-4">
        Tienes derecho a acceder, rectificar o eliminar tus datos personales.
        Para ejercer estos derechos, contáctanos en{" "}
        <a
          href="mailto:maortizpelegrin@gmail.com"
          className="text-blue-600 hover:underline"
        >
          maortizpelegrin@gmail.com
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        5. Cambios en la Política de Privacidad
      </h2>
      <p className="mb-4">
        Podemos actualizar esta política de privacidad periódicamente. Te
        notificaremos sobre cualquier cambio importante y actualizaremos la
        fecha de la última modificación.
      </p>

      <p className="text-gray-500 text-sm">
        Última actualización: 8 de noviembre de 2024
      </p>
    </section>
  );
}
