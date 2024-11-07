import { Ribbon } from 'lucide-react'

export default async function Home() {
  return (
    <main className="fixed w-full h-screen flex flex-col items-center pt-48 ">
      <h2 className='flex mb-6 justify-center mt-6 w-[60%] text-center font-bold'><Ribbon/> <span className='text-red-600'>TODOS</span> <span className='text-yellow-400 mx-2'>CON</span> <span className='text-red-600'>VALENCIA</span> <Ribbon/></h2>
      <h1 className="font-bold text-5xl uppercase">Profesionales voluntarios para la DANA</h1>
      <h2 className='mt-6 w-[60%] text-center'>Esta es una página creada para facilitar la busqueda de fonteneros, electricistas, albañiles y mas profesionales dispuestos a realizar trabajos de manera <strong>voluntaria</strong> en las zonas afectadas por la DANA.</h2>
    </main>
  );
}
