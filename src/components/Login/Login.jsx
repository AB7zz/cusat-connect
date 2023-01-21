import React from 'react'
import { Link } from 'react-router-dom'
import circle from '../../assets/images/static/circle.png'
import './style.css'

const Login = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-[#101316] to-[#06212f] h-screen'>
        <div className='absolute flex justify-center'>
          <div className='m-auto ml-12 mt-48 circle'></div>
        </div>
        <div className='form relative top-[245px] flex flex-col justify-center p-12'>
          <h1 className='mb-4 jockeyfont text-white text-center text-2xl'>Welcome Back</h1>
          <p className='mb-8 metrofont text-white opacity-[0.6] text-center'>Log into your account</p>
          <form className='flex flex-col' action="" method='POST'>
            <input className='metrofont mb-8 bg-[#172D3A] text-white px-4 py-4 rounded-[25px]' type="text" name="regid" placeholder='Registration number' id="regid" />
            <input className='metrofont bg-[#172D3A] text-white px-4 py-4 rounded-[25px]' type="password" name="password" placeholder='Password' id="pass" />
            <div className='flex flex-row justify-end mt-2'>
              <p className='metrofont text-[#64B5FF]'>Forgot password?</p>
            </div>
            <button className='bg-[#254C6C] text-[#CED8DD] py-3 rounded-[30px] mt-12'>Login</button>
            <p className='mt-4 ml-2 text-white opacity-[0.6]'>Don't have an account? <Link to='/register' className='font-bold text-white'>Register</Link> </p>
          </form>
        </div>
      </div>
      <div className='m-auto circle2'></div>
    </>
  )
}

// give animation to the form also, opacity frmo 0 to 100%
// and make position of the circle div to absolute so that the form can appear beind the circle

export default Login