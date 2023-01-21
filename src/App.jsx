import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Welcome from './components/Home/Welcome'
import Register from './components/Register/Register'
import Events from './components/Home/Events/Events'
import Mentors from './components/Mentors/Mentors'
import Items from './components/Items/Items'
import Map from './components/Map/Map'
import Hubspots from './components/Hubspots/Hubspots'
import MentorRegister from './components/MentorRegister/MentorRegister'
import ItemUpload from './components/ItemUpload/ItemUpload'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/mentors' element={<Mentors/>} />
        <Route path='/items' element={<Items/>} />
        <Route path='/map' element={<Map/>} />
        <Route path='/hubspots' element={<Hubspots/>} />
        <Route path='/mentorRegistration' element={<MentorRegister/>} />
        <Route path='/itemUpload' element={<ItemUpload/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
