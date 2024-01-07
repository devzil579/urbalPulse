import React from 'react'

export default function SignUp() {
  return (
    <div className='border-2 gap-4 p-3 max-w-96 mx-auto'>
      <h1 className='text-center font-bold text-xl'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input className='p-3 focus:outline-none' placeholder='email' type='email' value=''/>
        <input className='p-3 focus:outline-none' placeholder='password' type='password' value=''/>
        <button  className='bg-slate-700 text-white p-3 rounded-lg' type='submit'>Sign Up</button>
      </form>
      <p className='py-2' >Have an account <a className='text-blue-600'  href='/sign-in'>Sign in</a></p>
    </div>
  )
}
