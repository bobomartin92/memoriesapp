import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from 'react-toastify'
import {signup, reset, signin} from '../features/auth/authSlice'
import { IconContext } from "react-icons";
import { FaUserLock, FaSignInAlt } from 'react-icons/fa'

const Auth = ({setBurger}) => {

  const [auth, setAuth] = useState(true)

  const [formData, setFormData] = useState({
    name: '', email: '', password: '', password2: ''
  })

  const {name, email, password, password2} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isSuccess, isError, message} = useSelector(state => state.auth)

  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset())
  }, [user, isSuccess, isError, message, navigate, dispatch])

  const handleChange = (e) => {
    setFormData((p) => ({...p, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(auth){
        const userData = {email, password}
        dispatch(signin(userData))
    } else {
      if(password !== password2){
        toast.error('passwords do not match')
      } else {
        const userData = {name, email, password}
        dispatch(signup(userData))
      }
    }
  }

  const toggleAuth = () => {
    setAuth(!auth)
    setBurger(false)
  }

  return (
    <section className="h-screen">
      {isLoading && <div className='animate-spin w-16 h-16 border-8 rounded-full border-t-blue-600 border-b-blue-600 border-l-blue-600 border-r-blue-200'></div>}
      <div className='max-w-lg bg-white shadow-lg mx-auto mt-10 p-5'>

          {auth ? 
            <IconContext.Provider value={{ className: "block mx-auto rounded-full bg-red-400 p-1 mb-2 text-white", size: '3rem' }}>
              <div>
                  <FaSignInAlt />
              </div>
            </IconContext.Provider> :
            <IconContext.Provider value={{ className: "block mx-auto rounded-full bg-red-400 p-1 mb-2 text-white", size: '3rem' }}>
              <div>
                  <FaUserLock />
              </div>
            </IconContext.Provider>
          }

          <h1 className='text-center font-bold text-2xl mb-4'>{auth ? 'Sign In' : 'Sign Up' }</h1>

          <div>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
              {!auth && <input onChange={handleChange} className= 'w-full border-2 p-3 mb-3 border-blue-400' type="text" name="name" value={name} placeholder='Enter Your Name*'/>}
              <input onChange={handleChange} className='auth-input' type="email" name="email" value={email} placeholder='Enter Your Email*'/>
              <input onChange={handleChange} className='auth-input' type="password" name="password" value={password} placeholder='Enter Your Password*'/>
              {!auth && <input onChange={handleChange} className='auth-input' type="password" name="password2" value={password2} placeholder='Comfirm Password*'/>}
              <button className='auth-btn' type="submit">{auth ? 'SIGN IN' : 'SIGN UP' }</button>
              <button className='auth-btn' type="submit">oAuth</button>
              <h3 onClick={toggleAuth} className='text-right text-gray-600 cursor-pointer hover:text-blue-500' >{auth ? "Don't Have An Account? Sign Up" : 'Already Have An Account? Sign In' }</h3>
            </form>
          </div>
      </div>
    </section>
  )
}

export default Auth