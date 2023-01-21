import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import bg from '../../assets/images/static/bg.png'
import { LoginContext } from '../Context/LoginRegContext'



const ItemUpload = () => {
  const {handleItemSubmit, handleItemChange, setItemImage, handleItemConfirm} = React.useContext(LoginContext)
  return (
    <>
      <div className='bg-cover bg-center bg- h-screen' style={{backgroundImage: `url(${bg})`}} >
        <div className='absolute flex justify-center'>
          <div className='m-auto ml-12 mt-48 circle5'></div>
        </div>
        <div className='form2 relative top-[130px] flex flex-col justify-center p-12'>
          <h1 className='mb-16 jockeyfont text-white text-center text-2xl'>Item Upload</h1>
          {/* <p className='mb-8 metrofont text-white opacity-[0.6] text-center'>Log into your account</p> */}
          <form onSubmit={handleItemSubmit} className='flex flex-col' action="" method='POST'>
            <select name='rent' onChange={handleItemChange} className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]'>
              <option value="">Select option</option>
              <option value="Rent">Rent</option>
              <option value="Sale">Sale</option>
            </select>
            <input onChange={handleItemChange} className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' type="text" name="title" placeholder='Title' id="title" />
            <input onChange={handleItemChange} className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' type="text" name="name" placeholder='Your Name' id="name" />
            <input onChange={handleItemChange} className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' type="text" name="desc" placeholder='Description' id="desc" />
            <input onChange={handleItemChange} className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' type="text" name="price" placeholder='Price' id="price" />
            <input onChange={handleItemChange} className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' type="text" name="loc" placeholder='Location' id="loc" />

            <input onChange={e => setItemImage(e.target.files[0])} type="file" name="image" id="image" className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' />
            <label className='font-bold text-white'>UPI Id: abhinavcv007@oksbi </label>
            <label htmlFor="" className='text-white'>Pay to the above UPI Id and attach the proof</label>
            <input type="file" name="image" id="image" className='metrofont mb-3 bg-[#172D3A] text-white px-4 py-5 rounded-[25px]' />
            <input onChange={handleItemConfirm} type="checkbox" name="" id="" /> 
            <button type='submit' className='bg-[#254C6C] text-[#CED8DD] py-3 rounded-[30px] mt-2'>Upload Item</button>
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

export default ItemUpload