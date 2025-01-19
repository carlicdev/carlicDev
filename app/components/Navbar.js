import Link from 'next/link'
import React from 'react'
import { BiSolidPyramid } from "react-icons/bi";


const Navbar = () => {
  return (
    <div className='w-full bg-black'>
        <div className='max-w-7xl mx-auto'>
            <div className='px-2 lg:px-0 flex  py-4'>
                <Link href={'/'}>
                <div className='flex gap-2 items-center'>
                    <span className='text-4xl'>
                        <BiSolidPyramid />
                    </span>
                    <p className='font-ligth text-2xl tracking-tighter'>Carlic</p>
                </div>
                </Link>
                <div className='mr-0 ml-auto'>
                    <Link href={'/blog'}>
                        <button className='bg-orange-800 py-2 px-5 rounded'>
                            <p className='font-bold uppercase'>Ir al Blog</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar