import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import bg from '../../assets/images/static/bg.png'
import { LoginContext } from '../Context/LoginRegContext'



const MentorRegister = () => {
    const navigate = useNavigate()
    React.useEffect(() => {
        if(localStorage.getItem('isLogin') != 'true'){
            navigate('/home')
        }
    }, [])
  const {handleMentorRegSubmit, handleMentorRegChange, setMentorImage, handleMentorRegConfirm} = React.useContext(LoginContext)
  return (
    <>
      <div className='bg-cover bg-center h-screen' style={{backgroundImage: `url(${bg})`}} >
        <div className='absolute flex justify-center'>
          <div className='m-auto ml-12 mt-48 circle5'></div>
        </div>
        <div className='form2 relative top-[130px] flex flex-col justify-center p-12'>
          <h1 className='mb-16 jockeyfont text-white text-center text-2xl'>Mentor Registration</h1>
          {/* <p className='mb-8 metrofont text-white opacity-[0.6] text-center'>Log into your account</p> */}
          <form onSubmit={handleMentorRegSubmit} className='flex flex-col' action="" method='POST'>
            <input onChange={handleMentorRegChange} className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' type="text" name="name" placeholder='Name' id="name" />
            <input onChange={handleMentorRegChange} className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' type="text" name="regId" placeholder='Registration number' id="regId" />
            <input onChange={handleMentorRegChange} className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' type="text" name="skills" placeholder='Skills eg: HTML, CSS, JS' id="skills" />
            <input className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' type="text" name="linkedin" placeholder='Linkedin Profile' id="linkedin" />
            <select onChange={handleMentorRegChange} className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' name="campus" id="">
                <option value="">Select Campus</option>
                <option value="None">None</option>
                <option value="SOE">SOE</option>
                <option value="Main Campus">Main Campus</option>
                <option value="SLS">SLS</option>
                <option value="DDUKK">DDUKK</option>
                <option value="SMS">SMS</option>
            </select>
            <select onChange={handleMentorRegChange} className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' name="dept" id="">
                <option value="">Select Department</option>
                <option value="None">None</option>
                <option value="IT">IT</option>
                <option value="CS">CS</option>
                <option value="EC">EC</option>
                <option value="EEE">EEE</option>
            </select>
            <input onChange={e => setMentorImage(e.target.files[0])} type="file" name="image" id="image" className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' />
            <input onChange={handleMentorRegConfirm} type="checkbox" className='mr-[260px]' name="" id="" />
            <button type='submit' className='bg-[#254C6C] text-[#CED8DD] py-3 rounded-[30px] mt-2'>Register as Mentor</button>
            <p className='mt-4 ml-2 text-white opacity-[0.6]'>Already have an account? <Link to='/login' className='font-bold text-white'>Login</Link> </p>
          </form>
        </div>
      </div>
      <div className='m-auto circle6'></div>
    </>
  )
}

// give animation to the form also, opacity frmo 0 to 100%
// and make position of the circle div to absolute so that the form can appear beind the circle

export default MentorRegister