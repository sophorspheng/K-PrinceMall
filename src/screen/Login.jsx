import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-100'>
      <form className='bg-white w-full max-w-md p-8 rounded-lg shadow-lg'>
        <h3 className='text-3xl font-semibold font-serif text-black mb-4'>Login Form</h3>
        <h5 className='font-semibold font-serif text-black mb-6'>Welcome Back!</h5>
        <div className='mb-4'>
          <input 
            className='p-3 w-full border border-gray-300 rounded-lg text-lg'
            placeholder='Email or Phone number'
          />
        </div>
        <div className='mb-4'>
          <input 
            type='password'
            className='p-3 w-full border border-gray-300 rounded-lg text-lg'
            placeholder='Password'
          />
        </div>
        <div className='mb-6'>
          <button 
            className='w-full py-3 rounded-lg font-semibold text-lg text-white bg-blue-600 shadow-md hover:bg-blue-700 transition duration-300'
          >
            <Link to={'/'} className='text-white'>Login</Link>
          </button>
        </div>
      </form>
    </div>
  )
}
