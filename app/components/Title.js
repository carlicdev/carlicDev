import React from 'react'

const Title = ({category, title, subtext}) => {
  return (
    <div className='flex flex-col mx-auto max-w-3xl gap-2'>
        <p className='uppercase font-ligth text-2xl tracking-widest text-center'>{category}</p>
        <p className='capitalize font-black text-6xl tracking-tighter text-center'>{title}</p>
        <p className='text-lg text-center'>{subtext}</p>
    </div>
  )
}

export default Title