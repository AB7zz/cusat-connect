import React from 'react'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <div className="flex flex-row space-x-4 bg-[#172D3A] py-5 justify-evenly">
      <NotificationsActiveIcon className='text-white text-3xl'/>
      <Link to='/home' className='oxaniumfont font-bold rounded-[20px] bg-white text-[#172D3A] px-10 py-1'>CUSAT CONNECT</Link>
      <AccountCircleIcon className='text-white text-3xl'/>
    </div>
  )
}

export default Navbar