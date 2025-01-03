import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-black'>
        <div className='max-w-7xl mx-auto'>
            <div className='px-2 lg:px-0 flex  py-4'>
                <Link href={'/'}>
                    <p className='text-logo uppercase font-ligth text-2xl tracking-widest'>Carlic</p>
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