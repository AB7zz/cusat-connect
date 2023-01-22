import React from 'react'
import Navbar from './Navbar/Navbar'
import Events from './Events/Events'
import Hubspots from './Hubspots/Hubspots'
import Items from './Items/Items'
import Mentors from './Mentors/Mentors'
import BottomNav from '../BottomNav/BottomNav'
import UsedNb from './UsedNb/UsedNb'
import Internships from './Internships/Internships'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Events/>
      <Internships/>
      <Hubspots/>
      <Mentors/>
      <UsedNb/>
      <Items/>
      <BottomNav/>
    </>
  )
}

export default Home