import React from 'react'
import Navbar from './Navbar/Navbar'
import Events from './Events/Events'
import Hubspots from './Hubspots/Hubspots'
import Items from './Items/Items'
import Mentors from './Mentors/Mentors'
import BottomNav from '../BottomNav/BottomNav'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Events/>
      <Hubspots/>
      <Items/>
      <Mentors/>
      <BottomNav/>
    </>
  )
}

export default Home