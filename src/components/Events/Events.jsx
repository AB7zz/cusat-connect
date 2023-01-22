import { CardContent, Card, CardActionArea, CardMedia } from '@mui/material'
import React from 'react'
import BottomNav from '../BottomNav/BottomNav'
import Navbar from '../Home/Navbar/Navbar'
import pic1 from '../../assets/images/events/1.jpeg'
import pic2 from '../../assets/images/events/2.jpeg'
import pic3 from '../../assets/images/events/3.jpeg'

const Events = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex p-5 shadow-xl mb-6'>
            <img width={150} className='mr-4' src={pic1} alt="" />
            <h3>EveHack Hackathon in TinkerSpace Kochi</h3>
            <p>Kochi, Kerala</p>
            <button className='bg-blue-400 py-5 py-2 text-white'>Register</button>
        </div>
        <div className='flex p-5 shadow-xl'>
            <img width={150} className='mr-4' src={pic1} alt="" />
            <h3>EveHack Hackathon in TinkerSpace Kochi</h3>
            <p>Kochi, Kerala</p>
            <button className='bg-blue-400 py-5 py-2 text-white'>Register</button>
        </div>
        <div className='flex p-5 shadow-xl'>
            <img width={150} className='mr-4' src={pic1} alt="" />
            <h3>EveHack Hackathon in TinkerSpace Kochi</h3>
            <p>Kochi, Kerala</p>
            <button className='bg-blue-400 py-5 py-2 text-white'>Register</button>
        </div>
        <BottomNav/>
    </div>
  )
}

export default Events