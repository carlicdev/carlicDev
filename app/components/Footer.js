import React from 'react'
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaRegRegistered, FaYoutube } from "react-icons/fa6";
import Subscribe from './Subscribe';
import { BiSolidPyramid } from 'react-icons/bi';

const Footer = () => {
  return (
    <div className='w-full bg-black'>
        <div className='max-w-7xl mx-auto px-5 lg:px-0'>
            <div className='flex flex-wrap py-10 lg:py-20'>
                <div className='w-full lg:w-1/2 mb-10 lg:mb-0 flex flex-col gap-1 lg:pr-40'>
                    <div className='flex gap-2 items-center'>
                        <span className='text-4xl'>
                            <BiSolidPyramid />
                        </span>
                        <p className='font-ligth text-2xl tracking-tighter'>Carlic</p>
                    </div>
                    <p className='font-black text-2xl tracking-tight'>Libre. Indomable. Indestructible.</p>
                    <p className='text-xl'>Escribo sobre Masculinidad, Transformación Personal y Diseño de Estilo de Vida.</p>
                </div>
                <div className='w-full lg:w-1/2 mb-10 lg:mb-0 flex flex-col gap-1'>
                    <p className='font-black text-2xl tracking-tight capitalize mb-5'>Construye una masculinidad poderosa, Reclama tu libertad y toma el control de tu vida.</p>
                    <p className='text-xl mb-5'>Adquiere las creencias, características y habilidades necesarias para obtener resultados extraordinarios.</p>
                    <Subscribe />
                </div>                
            </div>
            <div className='border-t border-gray-500 py-10 lg:py-20'>
                <div className='flex justify-center gap-5'>
                    <span className='bg-orange-700 p-2 rounded-full text-2xl'>
                        <a href='https://x.com/CarlicCrg'>
                            <FaXTwitter />
                        </a>
                    </span>
                    <span className='bg-orange-700 p-2 rounded-full text-2xl'>
                        <a href='https://www.youtube.com/@soyCarlic'>
                            <FaYoutube />
                        </a>
                    </span>
                    <span className='bg-orange-700 p-2 rounded-full text-2xl'>
                        <a href='https://www.linkedin.com/in/carlic-crg-32b5961b6/'>
                            <FaLinkedinIn />
                        </a>
                    </span>
                </div>
                <div className='flex items-center justify-center gap-1 mt-5'>
                    <span className='text-gray-500'>
                        <FaRegRegistered />
                    </span>
                    <p className='text-gray-500'>carlic2025</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer