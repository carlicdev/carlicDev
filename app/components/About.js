import { BsSend, BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import Title from './Title'
import Image from 'next/image';

const About = () => {
  return (
    <div className='max-w-7xl mx-auto my-20'>
        <Title 
        category={'Quien soy'}
        title={'Quién es Carlic?'}
        subtext={'Un hombre comprometido con ayudar a otros hombres.'}
        />
        <div id={'about'} className='max-w-7xl mx-auto mb-10 p-5'>
            <div className='flex flex-wrap mt-10'>
                <div className='w-full lg:w-1/3 flex flex-col items-center justify-center mb-10 lg:mb-0'>
                    <div className='mb-10 rounded-full'>
                        <Image alt={'carlic'} src={'/carlic.jpg'} width={350} height={350} className='rounded-full'/>
                    </div>
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
                </div>
                <div className='w-full lg:w-2/3'>
                    <p className='text-3xl font-black'>Hola, soy Carlic!</p>
                    <p className='text-lg font-black text-orange-700'>Soy escritor, programador y jugador de poker.</p>
                    <p className='text-lg my-2'>Soy lo que quiero ser, en el momento que quiero serlo. Esa es la libertad que he buscado siempre.</p>
                    <p className='text-lg my-2'>Muchas veces llegué a pensar que debía haber algo mal conmigo. ¿Por qué hacía las cosas tan diferente al resto?</p>
                    <p className='text-lg my-2'>Me di cuenta de que la masculinidad está bajo ataque desde hace años. La sociedad intenta hacernos sentir inadecuados. Intenta confundirnos con respecto a nuestra masculinidad porque quiere hombres mansos. Hombres que no se separen del rebaño. Hombres que no intenten cambiar el <span className='italic'>status quo</span>.</p>
                    <p className='text-lg my-2'><span className='text-orange-700 font-bold'></span> Hoy tengo el control de mi vida y de mi tiempo. Tengo el control de mis emociones y de mis pensamientos.</p>
                    <p className='text-lg my-2'>Yo decido QUE hago, CUANDO lo hago y CON QUIEN lo hago.</p>
                    <p className='text-lg my-2'>Quiero ayudarte a convertirte en un hombre con ese PODER, con esa LIBERTAD. </p>
                    <p className='text-lg font-black text-orange-700'>Quiero ayudarte a construir una masculinidad poderosa, reclamar tu libertad y tomar el control de tu vida.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About