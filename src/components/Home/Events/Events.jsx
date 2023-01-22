import React from 'react'
import image1 from '../../../assets/images/events/1.jpeg'
import image2 from '../../../assets/images/events/2.jpeg'
import image3 from '../../../assets/images/events/3.jpeg'
import {Link} from 'react-router-dom'
import './style.css'

const images = [image1, image2, image3]

const Events = () => {
  return (
    <div className='mt-4 p-4'>
      <Link className='text-[#172D3A] font-bold oxaniumfont ml-4 text-2xl'>Events</Link>
      <br />
      <input className='radioinput' type="radio" name="position" checked />
      <input className='radioinput' type="radio" name="position" />
      <input className='radioinput' type="radio" name="position" />
      <input className='radioinput' type="radio" name="position" />
      <input className='radioinput' type="radio" name="position" />
      <main id="carousel">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </main>
    </div>
  )
}

export default Events