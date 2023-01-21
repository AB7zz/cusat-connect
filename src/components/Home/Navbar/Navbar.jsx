import React from 'react'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { LoginContext } from '../../Context/LoginRegContext';
import './style.css'

const Navbar = () => {
  const {isLogin, setLogin, handleLogOut} = React.useContext(LoginContext)
  const [show, setShow] = React.useState(false)
  React.useEffect(() => {
    if(localStorage.getItem('isLogin') == 'true'){
      setLogin(true)
    }
  }, [])
  const toggle = () => {
    if(show){
      setShow(false)
    }else{
      setShow(true)
    }
  }
  return (
    <div className="flex flex-row space-x-4 bg-[#172D3A] py-5 justify-evenly">
      <NotificationsActiveIcon className='text-white text-3xl'/>
      <Link to='/home' className='oxaniumfont font-bold rounded-[20px] bg-white text-[#172D3A] px-10 py-1'>CUSAT CONNECT</Link>
      {isLogin ? <AccountCircleIcon onClick={toggle} className='text-white text-3xl'/> : <Link to='/login' className='bg-white text-[#172D3A] px-4 py-2 rounded-[15px]'>Login</Link>}
      {show && (
        <div className='dropdown absolute bg-white h-[70px] w-[80px] rounded p-2'>
          <p>Profile</p>
          <hr style={{backgroundColor: 'black'}} />
          <p onClick={handleLogOut}>Log out</p>
        </div>
      )}
    </div>
  )
}

export default Navbar