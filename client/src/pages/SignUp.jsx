import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const  [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    });
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      setLoading(true)
    const res = await fetch('/api/auth/signup', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
    const data = await res.json();
    if(data.success==false){
      setError(data.message);
      setLoading(false)
      return;
      console.log(data)
    }
    setLoading(false);
    setError(null)
  
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }  
  return (
    <div className='gap-4 p-3 max-w-96 mx-auto'>
      <h1 className='text-center font-bold text-xl'>
        {loading ? 'Loading...': 'Sign Up'}
      </h1>
      <form className='flex flex-col gap-4'>
        <input className='p-3 focus:outline-none' placeholder='username' type='text'/>
        <input className='p-3 focus:outline-none' placeholder='email' type='email' />
        <input className='p-3 focus:outline-none' placeholder='password' type='password'/>
      <button  className='bg-slate-700 text-white p-3 rounded-lg' type='submit'>Sign Up</button>
      </form>
      <p className='py-2' >Have an account <a className='text-blue-600'  href='/sign-in'>Sign in</a></p>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
