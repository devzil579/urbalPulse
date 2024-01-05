import React from 'react'

export default function header() {
  return (
   <header className='bg-slate-200 shadown-md '>
    <div className="flex justify-between max-w-6xl mx-auto p-3 items-center">
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Urban</span>
        <span className='text-slate-700'>Pulse</span>
    </h1>
    <form>
        <input type='text' placeholder='Search...' className='focus:outline-none p-3 rounded-lg bg-transparant'/>
    </form>
    <ul className='flex flex-row gap-4'>
        <li><a className='hover:underlin' href='/'>Home</a></li>
        <li><a className='hover:underlin' href='/profile'>Profile</a></li>
        <li><a className='hover:underlin' href='/about'>About</a></li>
        <li><a className='hover:underlin' href='/sign-in'>SignIn</a></li>
        <li><a className='hover:underlin' href='/sign-up'>SignUp</a></li>
    </ul>
    </div>
    
   </header>
  )
}
