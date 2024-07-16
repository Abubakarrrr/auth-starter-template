import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'

const SignIn = () => {

  const navigate=useNavigate()
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError(false)
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })  
    const data = await res.json();
    setLoading(false)
    // console.log(data)
    if (data.success === false) {
      setError(true)
    }
    navigate('/')

  }

  return (
    <>
      <div className='p-3 max-w-[360px] mx-auto'>

        <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>

        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          
          <input
            type='email'
            placeholder='Email'
            id='email'
            className='bg-slate-100 p-3 rounded-lg'
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            id='password'
            className='bg-slate-100 p-3 rounded-lg'
            onChange={handleChange}
          />

          <button
            disabled={loading}
            className='bg-slate-700 text-white p-3 rounded-lg  hover:opacity-95 disabled:opacity-80'
          > {loading ? 'Loading...' : 'Sign In'}</button>

        </form>

        <div className='flex gap-2 mt-5'>
          <p>Don&apos;t have an account?</p>
          <Link to='/sign-up'>
            <span className='text-blue-500'>Sign Up</span>
          </Link>
        </div>

        <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
        
      </div>
    </>
  )
}

export default SignIn