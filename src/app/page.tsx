import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ribbon, ExternalLink } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";


export default async function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex flex-col flex-1 gap-3 justify-center items-center">
        <div className="mt-20 sm:mt-28 flex flex-col items-center gap-6">
          <Link href="https://x.com/Bizum_ES/status/1851593137036099958" target="_blank"><Badge><Ribbon className="w-4 mr-1" />Todos Con Valencia<Ribbon className="w-4 ml-1" /></Badge></Link>
          <h1 className="text-center font-bold text-5xl">Profesionales Voluntarios DANA</h1>
        </div>
        <h2 className="mt-5 text-center text-zinc-400">Esta página esta construida para que los profesionales de toda España puedan ofrecer su ayuda voluntaria a las zonas afectadas por la DANA.</h2>
        <h2 className="text-center text-zinc-400">Si eres una persona afectada o necesitas este tipo de ayuda voluntaria, también puede publicar tu situación.</h2>
        <h2 className="mt-10 font-semibold uppercase text-center">Consulta cualquiera de estas opciones</h2>
        <div className="flex flex-col items-center justify-center gap-5 mt-2">
          <div className="flex items-center gap-3">
            <Link href="/publicar"><Button>Solicitar Ayuda</Button></Link>
          </div>
          <Link href="#"><Button>Listado de Profesionales</Button></Link>
          <Link href="#"><Button>Listado de Afectados</Button></Link>
        </div>
        <section className="flex mt-20 flex-col items-center justify-center w-full h-20">
          <p className="text-sm">© mortizp</p>
          <a className="text-sm text-blue-400 hover:text-blue-500" href="mailto:maortizpelegrin@gmail.com">maortizpelegrin@gmail.com</a>
          <Link className="underline text-sm flex gap-1 items-center" target="_blank" href="/politicas">Politica de Privacidad<ExternalLink className="w-3"/></Link>
          <Link className="underline text-sm flex gap-1 items-center" target="_blank" href="/aviso-legal">Aviso Legal<ExternalLink className="w-3"/></Link>
          <div className="mt-5 mb-10 flex items-center gap-3">
            <Link className="hover:bg-" href="https://www.linkedin.com/in/manuelortizpelegrin/" target="_blank"><FaLinkedinIn className="text-xl" /></Link>
            <Link className="hover:bg-" href="https://github.com/mortizp15/provalencia.git" target="_blank"><FaGithub className="text-xl" /></Link>
          </div>
        </section>
      </div>
    </div>
  );
}
