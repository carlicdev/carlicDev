import React from 'react'
import Subscribe from './Subscribe'
import { BiSolidPyramid } from 'react-icons/bi'


const Hero = () => {
  return (
    <div className='max-w-lg my-14 mx-auto flex flex-col gap-7'>
        <span className='text-5xl mx-auto'>
          <BiSolidPyramid />
        </span>
        <div className='flex flex-col items-center'>
            <p className='font-black text-5xl md:text-6xl tracking-tighter text-center capitalize'>libre.</p>
            <p className='font-black text-5xl md:text-6xl tracking-tighter text-center capitalize'>indomable.</p>
            <p className='font-black text-5xl md:text-6xl tracking-tighter text-center capitalize'>indestructible.</p> 
        </div>
        <p className='text-lg text-center'>Construye una masculinidad poderosa. Reclama tu libertad. Toma el control de tu vida.</p>
        <p className='text-lg text-center'>Lo único que necesitas para conseguir todo lo que deseas es convertirte en un <span className='font-bold text-orange-700'>Hombre De 5 Herramientas.</span></p>
        <div className='px-5 lg:px-0'>
          <Subscribe />
        </div>
    </div>
  )
}

export default Hero