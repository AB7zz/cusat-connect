import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Welcome from './components/Home/Welcome'
import Register from './components/Register/Register'
import Events from './components/Events/Events'
import Mentors from './components/Mentors/Mentors'
import Items from './components/Items/Items'
import Maps from './components/Maps/Maps'
import Hubspots from './components/Hubspots/Hubspots'
import MentorRegister from './components/MentorRegister/MentorRegister'
import ItemUpload from './components/ItemUpload/ItemUpload'
import Chat from './components/Chat/Chat'
import { LoginContext } from './components/Context/LoginRegContext'

function App() {
  const {initFirebase} = React.useContext(LoginContext)
  React.useEffect(() => {
    initFirebase()
  }, [])
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
        <Route path='/map' element={<Maps/>} />
        <Route path='/hubspots' element={<Hubspots/>} />
        <Route path='/mentorRegistration' element={<MentorRegister/>} />
        <Route path='/itemUpload' element={<ItemUpload/>} />
        <Route path='/chat/:id' element={<Chat/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
