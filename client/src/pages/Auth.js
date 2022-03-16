import React, { useState } from 'react'
import { IconContext } from "react-icons";
import { FaUserLock } from 'react-icons/fa'

const Auth = () => {

  const [auth, setAuth] = useState(true)

  const [formData, setFormData] = useState({
    name: '', email: '', password1: '', password2: ''
  })

  const handleChange = (e) => {
    setFormData((p) => ({...p, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
  }

  return (
    <div className='max-w-lg bg-white shadow-lg mx-auto mt-10 p-5'>
        
        <IconContext.Provider value={{ className: "block mx-auto rounded-full bg-red-400 p-1 mb-2 text-white", size: '3rem' }}>
          <div>
              <FaUserLock />
          </div>
        </IconContext.Provider>

        <h1 className='text-center font-bold text-2xl mb-4'>{auth ? 'Sign In' : 'Sign Up' }</h1>

        <div>
          <form autoComplete='off' noValidate onSubmit={handleSubmit}>
            {!auth && <input onChange={handleChange} className='auth-input' type="text" name="name" value={formData.name} placeholder='Name' required/>}
            <input onChange={handleChange} className='auth-input' type="email" name="email" value={formData.email} placeholder='Email' required />
            <input onChange={handleChange} className='auth-input' type="password" name="password1" value={formData.password1} placeholder='Password' required />
            {!auth && <input onChange={handleChange} className='auth-input' type="password" name="password2" value={formData.password2} placeholder='Comfirm Password' required />}
            <button className='auth-btn' type="submit">{auth ? 'SIGN IN' : 'SIGN UP' }</button>
            <button className='auth-btn' type="submit">oAuth</button>
            <h3 onClick={() => setAuth(!auth)} className='text-right text-gray-600 cursor-pointer hover:text-blue-500' >{auth ? "Don't Have An Account? Sign Up" : 'Already Have An Account? Sign In' }</h3>
          </form>
        </div>
    </div>
  )
}

export default Auth