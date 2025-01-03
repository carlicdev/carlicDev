import Link from "next/link"


const ConfirmationPage = () => {
    return (
      <main className='h-screen pt-[110px]'>
          <div className='max-w-5xl mx-auto bg-black p-5 flex flex-col gap-4'>
              <p className='text-5xl font-black'>Quiero agradecerte por la confianza.</p>
              <p className='text-5xl font-black'>Bienvenido al  <span className="text-orange-700">Hombre De 5 Herramientas.</span></p>
              <p className='text-2xl'>En tu bandeja de entrada encontrarás un correo de bienvenida, así como una descripción general de lo que puedes esperar de este Newsletter.</p>
              <p className='text-2xl mt-5'>¿Quieres leer ediciones previas de mi Newsletter? Puedes leer todos los árticulos anteriores en mi Blog.</p>
              <div className='flex'>
                <Link href='/blog'>
                  <div className='bg-orange-700 px-4 py-2 rounded font-medium'>
                      Ir Al Blog
                  </div>
                </Link>
              </div>
          </div>
      </main>
    )
  }
  
  export default ConfirmationPage