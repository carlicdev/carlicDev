"use client"

import { redirect } from 'next/navigation'
import { useState } from 'react'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              email: email
            }) 
        })

        const data = await response.json();

        if (data.status === 200) { 
          setEmail('')
          setSuccess(true)
        }
    } catch (err) {
        console.log('error:', err)
    }
    
}

if (success) {
    redirect('/confirmation')
}

  return (
    <div className='w-full'>
      <form onSubmit={handleSubmit} className='flex w-full border-orange-700 rounded'>
        <input 
          placeholder='Tu mejor correo electrónico'
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='py-1 px-3 text-lg rounded-l focus:outline-none w-full text-black'
        />
        <button 
          type='submit'
          className='bg-orange-700 px-3 rounded-r py-2 text-lg font-semibold'
        >
            Suscribirse
        </button>
      </form>
      {error && (
            <p className='text-red-500'>{error} </p>
        )}
    </div>
  )
}

export default Subscribe