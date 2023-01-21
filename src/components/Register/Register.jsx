import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import bg from '../../assets/images/static/bg.png'
import { LoginContext } from '../Context/LoginRegContext'



const Register = () => {
  const navigate = useNavigate()
  React.useEffect(() => {
    if(localStorage.getItem('isLogin') == 'true'){
      navigate('/home')
    }
  }, [])
  const {handleRegSubmit, handleRegChange} = React.useContext(LoginContext)
  return (
    <>
      <div className='bg-cover bg-center bg- h-screen' style={{backgroundImage: `url(${bg})`}} >
        <div className='absolute flex justify-center'>
          <div className='m-auto ml-12 mt-48 circle3'></div>
        </div>
        <div className='form2 relative top-[130px] flex flex-col justify-center p-12'>
          <h1 className='mb-16 jockeyfont text-white text-center text-2xl'>Create Account</h1>
          {/* <p className='mb-8 metrofont text-white opacity-[0.6] text-center'>Log into your account</p> */}
          <form onSubmit={handleRegSubmit} className='flex flex-col' action="" method='POST'>
            <input onChange={handleRegChange} className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' type="text" name="name" placeholder='Name' id="name" />
            <input onChange={handleRegChange} className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' type="text" name="regId" placeholder='Registration number' id="regId" />
            <input onChange={handleRegChange} className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' type="email" name="email" placeholder='Email' id="email" />
            <input onChange={handleRegChange} className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' type="text" name="phone" placeholder='Phone number' id="phone" />
            <input onChange={handleRegChange} className='metrofont bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' type="password" name="password" placeholder='Password' id="pass" />
            <button type='submit' className='bg-[#254C6C] text-[#CED8DD] py-3 rounded-[30px] mt-12'>Register</button>
            <p className='mt-4 ml-2 text-white opacity-[0.6]'>Already have an account? <Link to='/login' className='font-bold text-white'>Login</Link> </p>
          </form>
        </div>
      </div>
      <div className='m-auto circle4'></div>
    </>
  )
}

// give animation to the form also, opacity frmo 0 to 100%
// and make position of the circle div to absolute so that the form can appear beind the circle

export default Register